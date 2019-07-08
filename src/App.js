import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shape from "./shape.js"

class Selector extends Component {

  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
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
          <Shape shape="square" selectShape = {this.selectShape}/>
          <Shape shape="circle" selectShape = {this.selectShape}/>
          <Shape shape="trapezium" selectShape = {this.selectShape}/>
          <Shape shape="oval" selectShape = {this.selectShape}/>
          <Shape shape="star" selectShape = {this.selectShape}/>
          <Shape shape="triangle_down" selectShape = {this.selectShape}/>
          <Shape shape="triangle_left" selectShape = {this.selectShape}/>
          <Shape shape="triangle_right" selectShape = {this.selectShape}/>
          <Shape shape="triangle" selectShape = {this.selectShape}/>
        </div>
      </div>
    );
  };
}

export default Selector;
