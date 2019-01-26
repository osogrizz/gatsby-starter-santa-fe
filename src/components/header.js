import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Transition } from 'react-spring'


class Header extends Component {
  state = {
    items: [],

  }


  render() {
    const { siteTitle } = this.props
    return (
      <div
      style={{
        background: `inherit`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1420,
          padding: `1.45rem 1.0875rem`,
        }}
      >  
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `red`,
              textDecoration: `none`,
            }}
            >
              {siteTitle}
          </Link>
        </h1>
      </div>
    </div> 
    )
  }
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}





