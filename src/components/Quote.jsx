import React from 'react'

function Quote(props) {
  return (
    <div className='container'>
        <h2>Quote: {props.quote}</h2>
        <p>Author: {props.author}</p>
        <p>Category: {props.category}</p>
        <button onClick={props.onRefresh} >Generate Quote</button>
    </div>
  )
}

export default Quote