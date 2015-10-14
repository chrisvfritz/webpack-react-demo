import React from 'react'
import { Link } from 'react-router'
import Layout from '../components/layout'
import TeamMember from '../components/team-member'

import teamMembers from '../config/team-members'

export default class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientAssumption: 'bot'
    }
  }

  componentDidMount() {
    this.setState({
      clientAssumption: 'human'
    })
  }

  render() {
    let team = []
    team = team.concat( shuffle(teamMembers.founders) )
    team = team.concat( shuffle(teamMembers.staff)    )
    team = team.concat( shuffle(teamMembers.mentors)  )

    return (
      <Layout>
        <p>If you're reading this, you are a { this.state.clientAssumption }.</p>
        {
          team.map(member => {
            return <TeamMember member={member}/>
          })
        }
      </Layout>
    )
  }
}

const shuffle = o => {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
