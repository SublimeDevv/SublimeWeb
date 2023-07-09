import React from 'react';
import '../styles/List.css'

const List = ({ results }) => {
  return (
    <>
    <h2 className='title'>La configuración de mi entorno de desarrollo en Linux.</h2>
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="search-result-card">
          <a href={result.url}><i className={result.icon}></i> {result.title}</a>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default List;
