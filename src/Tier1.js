import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const childColor = getReducedColor(initialColor)
    const grandchildColor = getReducedColor(childColor)
    this.state = {
      color: initialColor,
      childColor: childColor,
      grandchildColor: grandchildColor
    }
  }

  handleClick = () => {
    const newColor = getRandomColor()
    const newChildColor = getReducedColor(newColor)
    this.setState({
      color: newColor,
      childColor: newChildColor,
      grandchildColor: getReducedColor(newChildColor)
    });
  }

  handleChildClick = (e) => {
    e.stopPropagation();
    const newColor = getRandomColor();
    this.setState({
      childColor: newColor,
      grandchildColor: getReducedColor(newColor)
    })
  }

  handleGrandchildClick = (e) => {
    e.stopPropagation();
    this.setState({
      grandchildColor: getRandomColor()
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
      </div>
    )
  }
}
