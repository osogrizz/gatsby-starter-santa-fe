import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgb(243, 235, 222);
  margin-bottom: 1.45rem;
  text-align: center;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1420;
  padding: 1.45rem 1.0875rem;
  
  a {
    margin-right: 20px;
    color: #444;
    text-decoration: none;
  }
`




class Header extends Component {
  render() {
    // const { siteTitle } = this.props
    return (
      <Wrapper>
      <Container>  
        <Link to="/">
            {/* {siteTitle} */}
            Home
        </Link>

        <Link to="/contact">
          Contact
        </Link>
                
      </Container>
    </Wrapper> 
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




