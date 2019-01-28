import React, { Component } from 'react'
// import { Link } from 'gatsby'
import { Spring, config } from 'react-spring'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import BagImage from '../components/bag-image'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`
const BagContainer = styled.div`
  margin: 0 auto;
  border: 8px solid rgb(243, 235, 222);
`

const LogoContainer = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  padding: 0;

  h1 {
    font-size: 17vw;
    transform: scale(1, 1.3);
  }

  @media (max-width: 400px) {
    h1 {
      margin-top: 80px;  
      transform: scale(1, 2.5)
    }
  }

`


class IndexPage extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <LogoContainer>
              <Spring config={ config.molasses }
                from={{marginLeft: -2000}}
                to={{marginLeft: 0 }}
              >
              {props => ( <div style={{ paddingBottom: 260}}>
                            <h1 style={props}>Von</h1>
                            <h1 style={props}>Ruhtenberg</h1>  
                          </div>  
              )}
              </Spring>
          </LogoContainer>

          <div style={{ paddingTop: `100px`, margin: `0 auto`, maxWidth: `230px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>

          <p>A BAG SHOULD BE A SCULPTURE BEFORE ANYTHING ELSE</p>

          <BagContainer style={{  margin: `0 auto`, maxWidth: `660px`,maxHeight: `500px`, marginBottom: `1.45rem` }}>
            <BagImage />
          </BagContainer>

      </Layout>
    </Wrapper>
    )
  }
}

export default IndexPage

