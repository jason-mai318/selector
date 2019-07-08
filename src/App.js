import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Shape from "./shape.js"

class Selector extends Component {
    render(props) {
      return (
      <div className = "container">
        <div className="navbar">
            Selected Shape: <span>SHAPE_NAME</span> 
        </div>
        <div className = "shape-list">
          <Shape shape="square"/>
          <Shape shape="circle"/>
          <Shape shape="triangle"/>
          <Shape shape="square"/>
          <Shape shape="circle"/>
          <Shape shape="triangle"/>
          <Shape shape="square"/>
          <Shape shape="circle"/>
          <Shape shape="triangle"/>
        </div>
      </div>
      );
    };
}

export default Selector;
