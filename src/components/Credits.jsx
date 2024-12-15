import React from 'react';

const Credits = () => {
  return (
    <div className="credits-section p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Credits</h2>
      <p className="text-lg text-gray-600">
        This website was created with the help of a tutorial by 
        <a href="https://www.youtube.com/@compiletab" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> compiletab </a>. 
        Special thanks to <a href="https://www.youtube.com/@compiletab" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> compiletab channel</a> for the guidance and inspiration.
      </p>
    </div>
  );
};

export default Credits;
