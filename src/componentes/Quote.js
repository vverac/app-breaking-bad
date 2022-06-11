
import React from 'react'

// recibimos quote por props
export const Quote = ({ quote }) => {
  return (

    <p>{quote.text}<br /> {/* abrimos una sentencia js  y le decimos que nos imprima lo que esta en el estado quote.text */}
      <span> - {quote.author}
      </span>
    </p>
  )
}
