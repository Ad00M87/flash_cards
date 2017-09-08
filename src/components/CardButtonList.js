import React from 'react';

const CardButtonList = ({id, onFlip, onEdit, onDelete}) => {
  return(
    <div>
  <span className='btn orange darken-2' onClick={() => onFlip()}>Flip</span>
  <span className='btn' onClick={() => onEdit()}>Edit</span>
  <span className='btn red darken-4' onClick={() => onDelete(id)}>Delete</span>
  </div>
)
}

export default CardButtonList;
