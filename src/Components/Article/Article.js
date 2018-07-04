import React, { Component } from 'react';
import './Article.css';
import elementsForArticle from '../../HOC/HOC.js';

export const Article = ({ text }) => {
  return( 
      <div className='back'>
        <h1>Article</h1>
        <p>{text}</p>
      </div>
  );
};

export default elementsForArticle('Article')(Article); 
