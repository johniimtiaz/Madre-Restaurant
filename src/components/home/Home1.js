import React, { Component } from 'react'
import DemoCrousel from '../header/background'
import MidContent from '../midcontent/midcontent'
class Home extends Component {
  render() {
    return (
      <div>
        <DemoCrousel />
        <MidContent />
      </div>
    )
  }
}

export default Home
