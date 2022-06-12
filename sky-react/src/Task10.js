import React from 'react'

export default class Task10 extends React.Component {
  constructor(props) {
    super(props)
    this.text = 'Текст-10'
  }

  getText = () => <p>{this.text}</p>

  render() {
    return <div>{this.getText()}</div>
  }
}
