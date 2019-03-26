import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'


class Login extends Component {
  render() {
    return (
      <div className="container-fluid mainlog">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 "></div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12  content">
            <div className="head">
              <img src={require('./images/cropped-icon-32x32.png')} />
              <h6>Madre! Oaxacan Restaurant and Mezcaleria-Online Ordering</h6>
              <form action="#" class="was-validated form">
                <div class="form-group">
                  <label for="uname">Username:</label>
                  <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember" required /> I agree.
    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Check this checkbox to continue.</div>
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <h6>Not Registered. <Link to="/register">Register Now</Link>!</h6>

              </form>
              <div className="col-xl-4 col-lg-4 col-md-4 "></div>
              {/* <span>Powered by:</span> <img src={require('./images/cropped-icon-32x32.png')} alt="Madre" /> <span>Madre</span> */}
            </div>
          </div>


        </div>
      </div>
    )
  }
}


export default Login;