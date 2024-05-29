//rce
import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    //for a function based component just remove the class part and render part and make a function const Spinner=()=>{ copy the return part in this}
    return (
      <div className="text-center">
        <img className="my-3"src={loading} alt="loading" />
      </div>
    )
  }
}
export default Spinner
