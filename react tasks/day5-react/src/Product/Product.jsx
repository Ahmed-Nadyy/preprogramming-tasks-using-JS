import React, { Component } from 'react'

export default class Product extends Component {
    
  render() {
    let {brand , model , colorway , imageUrl} = this.props.product;
    return (
      <>
      <div className="col-md-4 mb-3" >
      <div className='border py-3 d-flex flex-column justify-content-center align-items-center' >
        <div className="d-flex">
        <span> {brand} </span><span> {model} </span><span> {colorway} </span>
        </div>
        <img src={imageUrl} className='w-75' style={{maxHeight:200}} alt="" />
      </div>
      </div>
      </>
    )
  }
}
