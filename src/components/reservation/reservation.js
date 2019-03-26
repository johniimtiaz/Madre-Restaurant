import React, { Component } from 'react'
import './reservation.css'



export default class Reservation extends Component{
    render() {
      return (
        <div className="container-fluid">
          <img src={require('../location/chocolate-shake.jpg')} className="imageOfLoc" alt="Coffee Milkshake"/>
       <div className="rev">
         &nbsp;
         <h1 className="h1">Reservations</h1>
         <h2 className="h2">We don't reserve orders out of Mexico!</h2>
         &nbsp;
       </div>
       
        </div>
      )
    }
}