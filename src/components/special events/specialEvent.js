import React, { Component } from 'react'
import './specialEvents.css'



export default class SpecialEvents extends Component {
  render() {
    return (
      <div className="container-fluid">
      <img src={require('./IMG_0615.jpg')} className="imgEvents" alt=""/>
        <div className="special">
          &nbsp;
          <h1>Special Events & Catering</h1>
          &nbsp;
        </div>
        <div className="container-fluid menubar">
          <div className="menuCon">


            <div className="container list">
              <ul className="list-group list-group-flush ul">
                <li className="list-group-item it">PARTY TRAY<br /><br />
                  <a href="./Party-Tray-MENU.pdf" target="blank" className="zoom"><img src={require('../menus/first.jpg')} alt="Party Tray" /></a>
                </li>
                <li className="list-group-item it">PREFIX MENU<br />
                  <a href="./PRefix-MENU.pdf" target="blank" className="zoom"><img src={require('../menus/combidas.jpg')} alt="Prefix Menu" /></a>
                </li>
                <li className="list-group-item it">COCKTAIL MENU<br />
                  <a href="./Cocktail-MENU.pdf" target="blank" className="zoom"><img src={require('../menus/happy.jpg')} alt="Cocktail Menu" /></a>
                </li>
                <li className="list-group-item it">BEBIDAS<br />
                  <a href="./El-Nopal-and-Madre-Catering-Menu-2018.pdf" target="blank" className="zoom"><img src={require('../menus/ScreenShot.png')} alt="Bebidas" /></a>
                </li>
              </ul>
            </div>

          </div>
        </div>







      </div>
    )
  }
}