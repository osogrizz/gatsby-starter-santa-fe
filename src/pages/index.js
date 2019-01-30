import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
  
  h4 {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }
`
const BagContainer = styled.div`
  margin: 0 auto;
  border: 8px solid rgb(243, 235, 222);
`

const DisplayItem = styled.div`
  margin: 300px auto;
`

const FooterStyles = styled.footer`
  margin: 0 auto;
  max-width: 950px;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    color: #444;
    font-weight: 100;
  }
`

class IndexPage extends Component {
  render() {
    const { data } = this.props
    return (
      <Wrapper>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

          <Link to="/">
            <div style={{ paddingTop: `5px`, margin: `0 auto`, maxWidth: `230px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </Link>

          <h4>Lorem ipsum dolor amet disrupt 3 wolf moon normcore</h4>

          <BagContainer style={{  margin: `0 auto`, maxWidth: `600px`,maxHeight: `500px`, marginBottom: `1.45rem` }}>
            <BagImage />
          </BagContainer>

          <DisplayItem>
            <Img fluid={data.bag1.fluid}/>
          </DisplayItem>
          
          <DisplayItem>
            <Img fluid={data.bag2.fluid}/>
          </DisplayItem>

          <DisplayItem>
            <Img fluid={data.bag3.fluid}/>
          </DisplayItem>

          <hr/>

          <FooterStyles>
            <div>
              Copyright © {new Date().getFullYear()},  CompanyName - All Rights Reserved
            </div>

            <div style={{ textAlign: 'right', }}>
              <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
            </div>
        </FooterStyles>

      </Layout>
    </Wrapper>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GalleryQuery {
    bag1: imageSharp(fluid: {originalName: {eq: "example-bag.jpg"}}) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
    bag2: imageSharp(fluid: {originalName: {eq: "example-bag.jpg"}}) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
    bag3: imageSharp(fluid: {originalName: {eq: "example-bag.jpg"}}) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }  
`