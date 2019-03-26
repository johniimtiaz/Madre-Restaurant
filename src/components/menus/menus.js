import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import image from './first.jpg'
import './menus.css'
// import pfd from './pdf/madre_2018.pdf'


export default class Menus extends Component {
  render() {
    return (
      <div className="container-fluid">
       
        <img src={require('./bgImage.jpg')} className="bgImageOfMenu" alt=""/>
        <div className="menus">
          &nbsp;
          <h1>Download Menu</h1>
          &nbsp;
        </div>
        <div className="container-fluid menubar">
          <div className="menuCon">


            <div class="container list">
              <ul class="list-group list-group-flush ul">
                <li class="list-group-item it">COMIDAS<br /><br />
                  <a href="./pdf/madre_2018.pdf" target="blank" className="zoom"><img src={require('./combidas.jpg')} alt="Comidas" /></a>
                </li>
                <li class="list-group-item it">HAPPY HOUR<br />
                  <a href="./pdf/menu_happy.pdf" target="blank" className="zoom"><img src={require('./happy.jpg')} alt="Comidas" /></a>
                </li>
                <li class="list-group-item it">BEBIDAS<br />
                  <a href="./pdf/menu_dinks-1.pdf" target="blank" className="zoom"><img src={require('./first.jpg')} alt="Comidas" /></a>
                </li>
                <li class="list-group-item it">CATERING<br />
                  <a href="./pdf/El-Nopal-and-Madre-Catering-Menu-2018.pdf" target="blank" className="zoom"><img src={require('./ScreenShot.png')} alt="Comidas" /></a>
                </li>
              </ul>
            </div>

          </div>
        </div>







      </div>
    )
  }
}
