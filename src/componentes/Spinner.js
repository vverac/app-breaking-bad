import React from 'react'
// importamos spinner.css
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="lds-default" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div >
  );
}

export default Spinner;