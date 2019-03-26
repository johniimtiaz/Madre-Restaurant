import React, { Component } from 'react'
import DemoCarousel from '../header/background'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import MidContent from '../midcontent/midcontent'
import Footer from '../footer/footer'
import Menus from '../menus/menus'
import TakeOut from '../takeout/takeout'
import Register from '../Register/register'
import Login from '../takeout/login'
import SpecialEvents from '../special events/specialEvent'
import Home from '../home/home'
import Location from '../location/location'
import Reservation from '../reservation/reservation'
import { RadioButtonCheckedSharp } from '@material-ui/icons';
// import Home from '../home/home'
// import BackgroundSlideShow from 'react-background-slideshow'
// import image1 from '../header/3Q6A0986-1.jpg'
// import image2 from '../header/ginger-gastropub-01-1920x1280.jpg'
// import image3 from '../header/coffee-1920x1080-beans-smoke-dark-hd-2488.jpg'


export default class Index extends Component {
    render() {
        return (
         
                <div>
                    <Header />
                        <Switch>
                            <Route path="/header" component={Header} />
                            <Route path="/home" component={DemoCarousel} />
                            <Route path="/home" component={MidContent} />
                            <Route path="/menus" component={Menus} />
                            <Route path="/take-out" component={TakeOut} />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/special-events" component={SpecialEvents} />
                            <Route path="/locations" component={Location} />
                            <Route path="/reservations" component={Reservation} />
                        
                        
                        </Switch>

                    <Footer />
                </div>
           
        )
    }
}