import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './background.css'



class DemoCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 check"
              src={require('./chicken.jpg')}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 check"
              src={require("./burger.jpg")}
              alt="Third slide"
            />

           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 check"
              src={require('./restaurant.jpg')}
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;