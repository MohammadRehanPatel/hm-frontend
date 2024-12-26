import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ease-in-out ${
              activeTab === tab.label
                ? "border-b-2 border-blue-600 text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label}>
              {/* Render the component passed as content */}
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
