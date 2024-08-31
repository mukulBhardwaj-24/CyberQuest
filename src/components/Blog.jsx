import React from 'react';
import { Shield, Award, ChevronRight } from 'lucide-react';

const offers = [
  {
    title: "Network Security Challenge",
    description: "Test your skills in identifying and mitigating network vulnerabilities.",
    prize: "Win a 1-year subscription to NordVPN",
    icon: Shield,
  },
  {
    title: "Ethical Hacking Workshop",
    description: "Learn the art of ethical hacking and penetration testing.",
    prize: "Get certified as an Ethical Hacker",
    icon: Award,
  },
  {
    title: "Cryptography Puzzle",
    description: "Crack complex codes and unravel encrypted messages.",
    prize: "Win a hardware encryption device",
    icon: Shield,
  },
  {
    title: "Social Engineering Awareness",
    description: "Master the techniques to identify and prevent social engineering attacks.",
    prize: "Exclusive access to cybersecurity webinars",
    icon: Award,
  },
];

const OfferCard = ({ title, description, prize, icon: Icon }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 text-blue-500" />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Limited Time</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-blue-500">
          <Award className="w-5 h-5 mr-2" />
          <span className="font-semibold">{prize}</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
        <button className="text-blue-500 font-semibold hover:underline focus:outline-none">
          Learn More
        </button>
        <ChevronRight className="w-5 h-5 text-blue-500" />
      </div>
    </div>
  </div>
);

const CyberQuestBlogCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cyber Quest Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default CyberQuestBlogCards;