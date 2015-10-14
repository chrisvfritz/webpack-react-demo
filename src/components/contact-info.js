import React from 'react'

import ContactIcon from './contact-icon'

export default class ContactInfo extends React.Component {
  render() {
    return (
      <span>
        <ContactIcon type={this.props.type}/>&nbsp;
        <a href={this.props.url}>
          { this.props.body }
        </a>
      </span>
    )
  }
}
