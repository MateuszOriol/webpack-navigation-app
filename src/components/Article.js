import React from 'react';

const Article = ({ name, logo, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={logo} alt={`${name} logo`} style={{ width: '120px', height: '120px' }}/>
      <p>{description}</p>
    </div>
  );
};

export default Article;
