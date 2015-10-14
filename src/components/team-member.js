import React from 'react'
import Radium from 'radium'
import ContactInfo from './contact-info'

export default Radium(class TeamMember extends React.Component {
  render() {
    return (
      <div className='media'>
        <div className='media-left'>
          <img
            src={ `/images/${this.props.member.name.replace(/\s/, '-').toLowerCase() }.jpg` }
            className='media-object'
            style={{
              width: 64,
              maxWidth: 64,
              borderRadius: '100%'
            }}
          />
        </div>
        <div className='media-body'>
          <h3 className='media-heading'>
            { this.props.member.name }
          </h3>
          <p
            dangerouslySetInnerHTML={{__html: this.props.member.bio}}
            style={styles.memberBio.base}
          />
          <ul style={styles.contactList.base}>
            {
              this.props.member.contact.map(info => {
                return (
                  <li style={styles.contactItem.base}>
                    <ContactInfo {...info}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
})

const styles = {
  memberBio: {
    base: {
      marginBottom: 7
    }
  },
  contactList: {
    base: {
      paddingLeft: 0
    }
  },
  contactItem: {
    base: {
      display: 'inline-block',
      listStyle: 'none',
      paddingRight: 15
    }
  }
}
