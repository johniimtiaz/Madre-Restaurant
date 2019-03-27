import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import logo from '../footer/Logo-main-wide.png'
import { Link } from 'react-router-dom'
import './footer.css'


export default class Footer extends Component {
  render() {
    return (
      <div className="foots">
        <div class="container-fluid bcFooter">
          <div className="mainFooter">


            <div class="row">

              <div class="col-sm-8 first1" >
                <Link to="/">
                  <img src={logo} className="img-fluid img1" alt="" />
                </Link>


              </div>
              <div class="col-sm-4 second1">

                <ul class="nav justify-content-center ul1">
                  <li class="nav-item item1">
                    <a class="nav-link faceicon1" href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li class="nav-item item1">
                    <a class="nav-link instaicon1" href="#"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li class="nav-item item1">
                    <a class="nav-link tripadvisor1" href="#"><i class="fa fa-tripadvisor"></i></a>
                  </li>
                  <li class="nav-item item1">
                    <a class="nav-link yelpicon1" href="#"><i class="fa fa-yelp"></i></a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link envelope1" href="#"><i class="fa fa-envelope-o envicon"></i></a>
                  </li>

                </ul>
              </div>
            </div>


            <div className="col-sm-12 navwali">
              <nav class="navbar navbar-expand-sm  navbar-dark dark">
                {/* <!-- Brand/logo --> */}
                {/* <a class="navbar-brand" href="#">Logo</a> */}

                {/* <!-- Links --> */}
                <ul class="navbar-nav justify-content-center ulist1">

                  <li class="nav-item item1 mhome1">
                    <Link to="/home" class="nav-link" >HOME</Link>
                  </li>

                  <li class="nav-item item1 mmenus1">
                    <Link to="/menus" class="nav-link">MENUS</Link>
                  </li>

                  <li class="nav-item item1 mspe1">
                    <Link to="/specialeventsandcatering" class="nav-link" href="#">SPECIAL EVENTS &amp; CATERING</Link>
                  </li>

                  <li class="nav-item item1 mtake1">
                    <a class="nav-link" href="#">TAKE OUT &amp; DELIVERY</a>
                  </li>

                  <li class="nav-item item1 mloc1">
                    <a class="nav-link" href="#">LOCATIONS</a>
                  </li>



                  <li class="nav-item ">
                    <a class="nav-link reser1 mres1" href="#">RESERVATIONS</a>
                  </li>
                </ul>
              </nav>
            </div>


          </div>
          <div className="caption">
            <p className="footer">Copyright © 2019 <Link to="/home" className="footerlink">Madre Restaurant Torrance California</Link>. All rights reserved. Powered by Latin Creative</p>
          </div>

        </div>
      </div>
    )
  }
}