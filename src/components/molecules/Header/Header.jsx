import React from 'react';


const Header = ({ category, title }) => (
  <div className="mb-10 p-3">
    <h2 className="text-4xl dark:text-gray-400">{category}</h2>
    <h1 className="text-3xl font-extrabold tracking-tight dark:text-white text-black">
      {title}
    </h1>
  </div>
);

export default Header;