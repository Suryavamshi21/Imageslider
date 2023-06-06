import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={value:1}
    }
  render() {
    return (
      <div>
        <h3>Counter No:{this.state.value}</h3>
        <button onClick={()=>this.setState({value:this.state.value+1})}>Increase</button>
        <button onClick={()=>this.setState({value:this.state.value-1})}>Decrease</button>
      </div>
    )
  }
}

export default Counter