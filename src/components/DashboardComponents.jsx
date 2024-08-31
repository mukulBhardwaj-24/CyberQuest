import * as React from "react"
import { cva } from "class-variance-authority"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as SelectPrimitive from "@radix-ui/react-select"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Check, ChevronDown } from "lucide-react"
import { Edit, Trash2 } from 'lucide-react';

// Card Component
export function Card({ className, ...props }) {
    return (
        <div
            className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }) {
    return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
}

export function CardTitle({ className, ...props }) {
    return (
        <h3
            className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
            {...props}
        />
    )
}

export function CardContent({ className, ...props }) {
    return <div className={`p-6 pt-0 ${className}`} {...props} />
}

// Input Component
export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = "Input"

// Button Component
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)
const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
        case 'easy': return 'bg-green-500 text-green-900';
        case 'medium': return 'bg-yellow-500 text-yellow-900';
        case 'hard': return 'bg-red-500 text-red-900';
        default: return 'bg-gray-500 text-gray-900';
    }
};

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

// Textarea Component
export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

// Select Component
export const Select = SelectPrimitive.Root

export const SelectGroup = SelectPrimitive.Group

export const SelectValue = SelectPrimitive.Value

export const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
                } ${className}`}
            position={position}
            {...props}
        >
            <SelectPrimitive.Viewport
                className={`p-1 ${position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                    }`}
            >
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

export const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

// Alert Component
export function Alert({ className, ...props }) {
    return (
        <div
            role="alert"
            className={`relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 ${className}`}
            {...props}
        />
    )
}

export function AlertDescription({ className, ...props }) {
    return (
        <div
            className={`text-sm [&_p]:leading-relaxed ${className}`}
            {...props}
        />
    )
}

// Tabs Component
export const Tabs = TabsPrimitive.Root

export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Table Component
export const Table = React.forwardRef(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={`w-full caption-bottom text-sm border-2 ${className}`}
            {...props}
        />
    </div>
))
Table.displayName = "Table"

export const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-4 [&_tc]:border-4 text-center ${className}`} {...props} />
))
TableHeader.displayName = "TableHeader"

export const TableBody = React.forwardRef(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={`[&_tr]:border-2 text-center ${className}`}
        {...props}
    />
))
TableBody.displayName = "TableBody"

export const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`}
        {...props}
    />
))
TableFooter.displayName = "TableFooter"

export const TableRow = React.forwardRef(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
        {...props}
    />
))
TableRow.displayName = "TableRow"

export const TableHead = React.forwardRef(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
        {...props}
    />
))
TableHead.displayName = "TableHead"

export const TableCell = React.forwardRef(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
        {...props}
    />
))
TableCell.displayName = "TableCell"

// Dialog Component
export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal

export const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className}`}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                {/* <X className="h-4 w-4" /> */}
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName


export const DialogHeader = ({
    className,
    ...props
}) => (
    <div
        className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
        {...props}
    />
)
DialogHeader.displayName = "DialogHeader"

export const DialogFooter = ({
    className,
    ...props
}) => (
    <div
        className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
        {...props}
    />
)
DialogFooter.displayName = "DialogFooter"

export const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={`text-lg font-semibold leading-none tracking-tight ${className}`}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

export const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={`text-sm text-muted-foreground ${className}`}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

// Label Component
export const Label = React.forwardRef(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
        {...props}
    />
))
Label.displayName = "Label"




export const ConceptTable = ({ data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Name</TableHead>
                        <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Description</TableHead>
                        <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                            <TableCell className="p-3 font-medium">{item.conceptName}</TableCell>
                            <TableCell className="p-3">{item.description}</TableCell>
                            <TableCell className="p-3">
                                <div className="flex justify-center space-x-2">
                                    <button
                                        onClick={() => onEdit(item)}
                                        className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(item)}
                                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

// export const QuestionTable = ({ data, onEdit, onDelete }) => {
//   return (
//     <div className="overflow-x-auto">
//       <Table className="w-full border-collapse">
//         <TableHeader>
//           <TableRow className="bg-gray-100">
//             <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Concept</TableHead>
//             <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Name</TableHead>
//             <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Difficulty</TableHead>
//             <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Description</TableHead>
//             <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {data.map((item) => (
//             <TableRow key={item.id} className="border-b hover:bg-gray-50 transition-colors">
//               <TableCell className="p-3 font-medium">{item.concept}</TableCell>
//               <TableCell className="p-3 font-medium">{item.title}</TableCell>
//               <TableCell className="p-3 font-medium">{item.difficulty}</TableCell>
//               <TableCell className="p-3">{item.description}</TableCell>
//               <TableCell className="p-3">
//                 <div className="flex justify-center space-x-2">
//                   <button
//                     onClick={() => onEdit(item)}
//                     className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
//                   >
//                     <Edit size={18} />
//                   </button>
//                   <button
//                     onClick={() => onDelete(item)}
//                     className="p-1 text-red-500 hover:text-red-700 transition-colors"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };



// export const QuestionTable = ({ data, onEdit, onDelete }) => {
//     return (
//       <div className="overflow-x-auto">
//         <Table className="w-full border-collapse">
//           <TableHeader>
//             <TableRow className="bg-gray-100">
//               <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Concept</TableHead>
//               <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Name</TableHead>
//               <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Difficulty</TableHead>
//               <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Description</TableHead>
//               <TableHead className="w-1/4 p-3 text-center font-semibold text-gray-600">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.map((concept) =>{
//               if(concept.questionList)
//               return concept.questionList.map((question, index) => (
//                 <TableRow key={`${concept.conceptName}-${index}`} className="border-b hover:bg-gray-50 transition-colors">
//                   <TableCell className="p-3 font-medium">{concept.conceptName}</TableCell>
//                   <TableCell className="p-3 font-medium">{question.title}</TableCell>
//                   <TableCell className="p-3 font-medium">{question.difficulty}</TableCell>
//                   <TableCell className="p-3">{question.description}</TableCell>
//                   <TableCell className="p-3">
//                     <div className="flex justify-center space-x-2">
//                       <button
//                         onClick={() => onEdit(question)}
//                         className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
//                       >
//                         <Edit size={18} />
//                       </button>
//                       <button
//                         onClick={() => onDelete(question)}
//                         className="p-1 text-red-500 hover:text-red-700 transition-colors"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   };



export const QuestionTable = ({ data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="w-1/5 p-3 text-center font-semibold text-gray-600">Concept Name</TableHead>
                        <TableHead className="w-1/5 p-3 text-center font-semibold text-gray-600">Name</TableHead>
                        <TableHead className="w-1/5 p-3 text-center font-semibold text-gray-600">Difficulty</TableHead>
                        <TableHead className="w-1/5 p-3 text-center font-semibold text-gray-600">Description</TableHead>
                        <TableHead className="w-1/5 p-3 text-center font-semibold text-gray-600">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((question, index) => (
                        <TableRow key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <TableCell className="p-3 font-medium">{question.conceptName}</TableCell> {/* Displaying conceptName */}
                            <TableCell className="p-3 font-medium">{question.title}</TableCell>
                            <TableCell>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                                    {question.difficulty}
                                </span>
                            </TableCell>
                            <TableCell className="p-3">{question.description}</TableCell>
                            <TableCell className="p-3">
                                <div className="flex justify-center space-x-2">
                                    <button
                                        onClick={() => onEdit(question)}
                                        className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(question)}
                                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
