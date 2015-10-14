import React from 'react'

export default class ContactIcon extends React.Component {
  render() {
    return (
      <i className={`fa fa-${iconFor[this.props.type]}`}/>
    )
  }
}

const iconFor = {
  GitHub: 'github',
  Twitter: 'twitter',
  LinkedIn: 'linkedin',
  Email: 'envelope',
  'Stack Overflow': 'stack-overflow',
  Blog: 'rss',
  Business: 'briefcase',
  Slack: 'slack'
}
