import React, { Component } from 'react';
import './App.css';
import Shape from "./shape.js"

class Selector extends Component {

  constructor() {
    super();
    this.state = {
      selectedShape: 'none',
    }
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          Selected Shape: <span> {this.state.selectedShape}</span>
        </div>
        <div className="shape-list">
          <Shape shape="square" id = "1" selectShape = {this.selectShape}/>
          <Shape shape="circle" id = "2" selectShape = {this.selectShape}/>
          {/* <Shape shape="trapezium" id = "3" selectShape = {this.selectShape}/>
          <Shape shape="oval" id = "4" selectShape = {this.selectShape}/>
          <Shape shape="star" id = "5" selectShape = {this.selectShape}/>
          <Shape shape="triangle_down" id = "6" selectShape = {this.selectShape}/>
          <Shape shape="triangle_left" id = "7" selectShape = {this.selectShape}/>
          <Shape shape="triangle_right" id = "8" selectShape = {this.selectShape}/>
          <Shape shape="triangle" id = "9" selectShape = {this.selectShape}/> */}
        </div>
      </div>
    );
  };
}

export default Selector;
