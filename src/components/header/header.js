import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
// import '@fortawesome/fontawesome-svg-core'
import 'font-awesome/css/font-awesome.min.css'
import logo from './Logo-home-wide2.png'
// import Index from '../Main';
// import Menus from '../menus/menus'
// var FontAwesome = require('react-fontawesome')







class Header extends Component {

  render() {
    return (
      <div class="container-fluid bcHeader">
        <div className="main">


          <div class="row">

            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-5 first" >
              <Link to="/home">
                <img src={logo} className="img-fluid img" alt="Logo" title="Home" />
              </Link>


            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 second">

              <ul class="nav justify-content-center ul">
                <li class="nav-item item">
                  <Link to="https://www.facebook.com/Madre-891949160953653/" class="nav-link faceicon" ><i class="fa fa-facebook"></i></Link>
                </li>
                <li class="nav-item item">
                  <Link to="https://www.instagram.com/johniimtiaz/" class="nav-link instaicon" ><i class="fa fa-instagram"></i></Link>
                </li>
                <li class="nav-item item">
                  <Link to="https://www.tripadvisor.com/Restaurant_Review-g33182-d12908266-Reviews-Madre-Torrance_California.html" class="nav-link tripadvisor" ><i class="fa fa-tripadvisor"></i></Link>
                </li>
                <li class="nav-item item">
                  <Link to="https://www.yelp.com/biz/madre-torrance" class="nav-link yelpicon" ><i class="fa fa-yelp"></i></Link>
                </li>

                <li class="nav-item">
                  <Link to="johniimtiaz@gmai.com" class="nav-link envelope" ><i class="fa fa-envelope-o envicon"></i></Link>
                </li>

              </ul>
            </div>
          </div>


          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 navwali">
            <nav class="navbar navbar-expand-sm  navbar-dark dark">
              {/* <!-- Brand/logo --> */}
              {/* <a class="navbar-brand" href="#">Logo</a> */}

              {/* <!-- Links --> */}
              <ul class="navbar-nav justify-content-center ulist">

                <li class="nav-item item mhome color">
                  <Link to="/home" class="nav-link color home" >HOME</Link>
                </li>

                <li class="nav-item item mmenus color">
                  <Link to="/menus" class="nav-link color menuswali" >MENUS</Link>
                </li>

                <li class="nav-item item mspe color">
                  <Link to="/special-events" class="nav-link color cateringwali" >SPECIAL EVENTS &amp; CATERING</Link>
                </li>

                <li class="nav-item item mtake color">
                  <Link to="/take-out" class="nav-link color take" >TAKE OUT &amp; DELIVERY</Link>
                </li>

                <li class="nav-item item mloc color">
                  <Link to="/locations" class="nav-link color location" >LOCATIONS</Link>
                </li>



                <li class="nav-item color">
                  <Link to="/reservations" class="nav-link reser mres" >RESERVATIONS</Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    )
  }
}


export default Header