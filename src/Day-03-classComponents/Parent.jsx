import React from "react";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0
    }
    console.log("constructor called");
  }

  shouldComponentUpdate (nextprops, nextstates) {
    console.log({nextprops, nextstates})
    return nextstates.age%2===0
  }

  // componentDidMount() {
  //   console.log("componentDidMount called")
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate called")
  // }

  componentWillUnmount() {
    console.log("componentWillUnmount called")
  }
  handlePlusClick = () => {
    console.log(this.state);
    this.setState({age: this.state.age+1})
  }

  handleMinusClick = () => {
    console.log(this.state);
    this.setState({age: this.state.age-1})
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  render(){
    return(
    <>
      <div>class component</div>
      <div>{this.state.age}</div>
      <div>{this.state.name}</div>

      <button onClick={this.handlePlusClick}>+1</button>
      <button onClick={this.handleMinusClick}>-1</button>
      <input type="text" onChange={this.handleName} />
    </>
    )
  }
}

export default Parent;