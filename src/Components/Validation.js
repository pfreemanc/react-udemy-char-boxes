import React from 'react'

function validation({ textLength }) {

  let validated = 'Text is long enough!';

  if(textLength < 5) {
    validated = 'Text is too short :(' 
  } else if(textLength > 25) {
    validated = `That's some long text!`;
  }

  return (
    <div>
      <p>{validated}</p>
    </div>
  )
}

export default validation;
