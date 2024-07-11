
import type React from 'react';
import { useState } from 'react';
import { tabContent } from '../../data/index';

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tabContent.map((tab, index) => (
          <button
            type="button"
            key={tab.id} // Using a unique identifier as the key
            onClick={() => handleTabClick(index)}
            className={`text-lg font-semibold px-4 py-2 rounded-full uppercase ${
              activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>{tabContent[activeTab].tabContent}</p> {/* Displaying tab content based on activeTab */}
      </div>
    </div>
  );
};

export default Tab;
