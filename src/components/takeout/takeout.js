import React, { Component } from 'react'
import Register from './register'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import './takeout.css'




export default class TakeOut extends Component {

  render() {
    return (
      <div className="container-fluid tasveer">
      <div className="container mainlog">

        <Card className="text-center mainlog">
          <Card.Header>Madre! Oaxacan Restaurant and Mezcaleria-Online Ordering</Card.Header>
          <Card.Body>
            <Card.Title>For Ordering Online You Must <Link to="/login">Login</Link> First!</Card.Title>
            <Card.Text>
              If You Are Not Registered! Click Link Below to Get Registered!
            </Card.Text>
                    <Link to="/registerAccount">
                      Create Account
                    </Link>
            </Card.Body>
          <Card.Footer className="text-muted">Madre Restaurant</Card.Footer>
        </Card>
      


    </div>
    </div>
    )
  }
}