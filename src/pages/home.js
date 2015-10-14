import React from 'react'
import Layout from '../components/layout'

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <p>This is a static site built in JavaScript, using Webpack and React, with a lot of the heavy lifting taken care of by the hjs-webpack library.</p>
        <h3>Why not?</h3>
        <ul>
          <li>No cool plugin ecosystem to add blog functionality, etc - you have to build everything yourself.</li>
        </ul>
        <h3>Why?</h3>
        <ul>
          <li>You get to build everything yourself!</li>
          <li>The full power of a client-side framework, with selective, customizable, and <em>predictable</em> pre-rendering (no PhantomJS hacks!).</li>
          <li>Live reloading in development <em>without state loss</em>.</li>
        </ul>
        <h3>Where?</h3>
        <ul>
          <li><a href='https://github.com/chrisvfritz/webpack-react-demo/'>github.com/chrisvfritz/webpack-react-demo</a></li>
          <li><a href='http://webpack-react.surge.sh/'>webpack-react.surge.sh</a></li>
        </ul>
      </Layout>
    )
  }
}
