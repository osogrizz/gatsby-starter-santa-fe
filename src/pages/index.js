import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Spring, config } from 'react-spring'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Wrapper = styled.div`
  display: grid;
  text-align: center;

`


class IndexPage extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <Spring config={config.stiff}
            from={{marginLeft: -2000, fontSize: 200}}
            to={{marginLeft: 0, fontSize: 200}}
          >
          {props => ( <div style={{ paddingBottom: 260}}>
                        <h1 style={props}>Von</h1>
                        <h1 style={props}>Ruhtenberg</h1>  
                      </div>  
          )}
          </Spring>

          <div style={{ paddingTop: `100px`, margin: `0 auto`, maxWidth: `243px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <p>A BAG SHOULD BE A SCULPTURE BEFORE ANYTHING ELSE</p>
      <Link to="/contact/">Contact</Link>
    </Layout>
    </Wrapper>
    )
  }
}

export default IndexPage