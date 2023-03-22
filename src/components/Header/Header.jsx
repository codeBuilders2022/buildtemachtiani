import React from 'react';


const Header = ({ category, title }) => (
  <div className="mb-10 p-3">
    <p className="text-4xl dark:text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight dark:text-white text-black">
      {title}
    </p>
  </div>
);

export default Header;