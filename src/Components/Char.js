import React from 'react'

const char = ({ character, onClick }) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }

  return (
    <div style={style} onClick={onClick}>
      {character}
    </div>
  )
}

export default char;