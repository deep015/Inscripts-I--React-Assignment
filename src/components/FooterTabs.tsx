import { useState } from 'react';

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

const FooterTabs = () => {
  const [active, setActive] = useState('All Orders');

  return (
    <footer className="border-t px-4 py-2 bg-white flex items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`text-sm px-3 py-1 rounded ${active === tab ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {tab}
        </button>
      ))}
      <button
        className="text-gray-600 text-lg font-bold px-2 hover:bg-gray-100 rounded"
        onClick={() => console.log('New tab clicked')}
      >
        +
      </button>
    </footer>
  );
};

export default FooterTabs;
