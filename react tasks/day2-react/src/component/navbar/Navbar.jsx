import React, { Component } from 'react'
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className='w-100'>
        <h1 style={{color:"red",backgroundColor:"blue",fontSize:"5vh"}}>Navbar Component</h1>
        <h2 className='flex justify-center align-center'>Heloooo</h2>
      </div>
    )
  }
}
