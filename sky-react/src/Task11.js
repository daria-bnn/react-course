import React from 'react'

export default class Task11 extends React.Component {
  constructor(props) {
    super(props)
    this.text1 = 1
    this.text2 = 2
  }

  getNum1 = () => this.text1

  getNum2 = () => this.text2

  render() {
    return <div>Текст {this.getNum1() + this.getNum2()}</div>
  }
}
