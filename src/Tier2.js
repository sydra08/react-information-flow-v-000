import React, { Component } from 'react'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: this.props.childColor,
    }
  }

  render() {
    return (
      <div onClick={this.props.handleClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={this.props.handleChildClick} color={this.props.childColor} />
        <Tier3 handleChildClick={this.props.handleChildClick} color={this.props.childColor} />
      </div>
    )
  }
}
