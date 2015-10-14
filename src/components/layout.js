import React from 'react'
import Navigation from './navigation'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}
