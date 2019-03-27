import React, { Component } from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/Home1'
import Header from './components/header/header'
import MidContent from './components/midcontent/midcontent'
import Footer from './components/footer/footer'
import Menus from './components/menus/menus'
import TakeOut from './components/takeout/takeout'
import Register from './components/Register/register'
// import Signup from './components/SignUp/signup'
import Login from './components/takeout/login'
import SpecialEvents from './components/special events/specialEvent'
import DemoCarousel from './components/header/background'
import './App.css'
import { Provider } from 'react-redux'
import store from './components/redux/store/index'
import Location from './components/location/location'
import Reservation from './components/reservation/reservation'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Provider store={store}>
            <div>
              <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/menus" component={Menus} />
                <Route path="/take-out" component={TakeOut} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/special-events" component={SpecialEvents} />
                <Route path="/locations" component={Location} />
                <Route path="/reservations" component={Reservation} />

                <Route path='/' component={Home}/>


              </Switch>

              <Footer />
            </div>

          </Provider>
        </div>

      </BrowserRouter>

    );
  }
}

export default App
