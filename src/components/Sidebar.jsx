import "../App.css"

const Sidebar = () => {
    return (
        <>
            <div className="App">
                <SidebarWrapper />
                <div className="content">
                    <section id="section1">
                        <h2>Section 1</h2>
                        <p>This is the content for section 1.</p>
                    </section>
                    <section id="section2">
                        <h2>Section 2</h2>
                        <p>This is the content for section 2.</p>
                    </section>
                    <section id="section3">
                        <h2>Section 3</h2>
                        <p>This is the content for section 3.</p>
                    </section>
                    <section id="section4">
                        <h2>Section 4</h2>
                        <p>This is the content for section 4.</p>
                    </section>
                </div>
            </div>
        </>
    );
};

const SidebarWrapper = () => {
    const items = [
        { id: 'section1', title: 'Section 1' },
        { id: 'section2', title: 'Section 2' },
        { id: 'section3', title: 'Section 3' },
        { id: 'section4', title: 'Section 4' },
      ];
    
      return (
        <div className="sidebar">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default Sidebar;