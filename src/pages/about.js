import React from 'react'
import Layout from '../components/layout'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsOnPage: 0,
    }
    this.incrementSecondsOnPageCounter = this.incrementSecondsOnPageCounter.bind(this)
  }

  componentDidMount() {
    setInterval(this.incrementSecondsOnPageCounter, 1000)
  }

  incrementSecondsOnPageCounter() {
    this.setState({
      secondsOnPage: this.state.secondsOnPage + 1
    })
  }

  render() {
    return (
      <Layout>
        <p>This is an About page. You've been looking at it for { this.state.secondsOnPage } seconds.</p>
      </Layout>
    )
  }
}
