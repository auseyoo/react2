import React from 'react';

export default function Profile({img, name, summary, isNew}) {
  return (
    <div className='profile'>
        <img src={img} className='photo'/>
        <h2>{name}</h2>
        <p>{summary}</p>
        { isNew && <span className='new'>new</span> }
    </div>
  );
}
