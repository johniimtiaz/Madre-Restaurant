import React, { Component } from 'react'
import Iframe from 'react-iframe'
import './location.css'




export default class Location extends Component{
    render() {
      return (
          <div className="container-fluid">
       
       <img src={require('./chocolate-shake.jpg')} className="imageOfLoc" alt="Coffee Milkshake"/>
       <div className="maps">
         &nbsp;
         <h1 className="h1">Locations</h1>
         &nbsp;
       </div>
       <div className="container-fluid mapbar">
         <div className="iframe">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13226.365170502593!2d-118.4113583!3d34.0287005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x397f95735d33ccf1!2sEl+Nopal!5e0!3m2!1sen!2sus!4v1543449044986" 
         frameborder="0" 
         allowfullscreen="allowfullscreen" 
         name="fitvid0" 
         border="0"
         width="100%"
         height="550px" ></iframe>
         </div>
       </div>







     </div>
      )
    }
}