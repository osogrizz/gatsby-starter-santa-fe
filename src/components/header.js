import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgb(243, 235, 222);
  margin-bottom: 1.45rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1420;
  height: 65px;
  padding-top: 1rem ;
  text-transform: uppercase;
  font-size: 0.82rem;
  font-weight: 200;
  letter-spacing: 1px;;

  
  a {
    margin-right: 20px;
    margin-left: 20px;
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
          Contact Us
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





