import React from 'react'
import Layout from '../components/layout'

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <p>This is a static site built in JavaScript, using Webpack and React, with a lot of the heavy lifting taken care of by the hjs-webpack library. Some features of this setup include:</p>
        <ul>
          <li>The full power of a client-side framework, with selective and customizable pre-rendering.</li>
          <li>Live reloading <em>without state loss</em> in development.</li>
          <li>Impossible dreams</li>
        </ul>
      </Layout>
    )
  }
}
