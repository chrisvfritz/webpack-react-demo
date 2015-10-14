import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

export default Radium(class Layout extends React.Component {
  render() {
    return (
      <nav className='top-nav top-nav-light cf' role='navigation'>
        <div className='container'>
          <ul className='list-unstyled list-inline cf'>
            <li style={styles.navBrand.base}>
              <Link to='/'> Home </Link>
            </li>
            <li><Link to='/team'> Team </Link></li>
            <li><Link to='/about'> About </Link></li>
          </ul>
        </div>
      </nav>
    )
  }
})

const styles = {
  navBrand: {
    base: {
      paddingLeft: 0,
      fontSize: 18,
      fontWeight: 500
    }
  }
}
