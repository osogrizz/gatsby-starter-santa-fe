import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 850px;
  padding-bottom: 60px;

  h5 {
    font-weight: 150;
    font-size: .9rem;
    letter-spacing: 0.8px;
  }

  h4 {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }

  p {
    color: #777;
    font-size: 16px;

    a {
      text-decoration: none;
      color: #777;
      &:hover {
        color: rgb(243, 235, 222)
      }
    }
  }
`


const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 700px;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;
`

const InputStyles = styled.input`
  height: 50px;
  margin: 10px 0;

`

const Btn = styled.button`
  background: inherit;
  margin: 20px auto;
  border-radius: 40px;
  border-color: #222;
  padding: 5px;
  width: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
`
const TextArea  = styled.textarea`
  margin-top: 10px;
`

const LogoContainer = styled.div`
  padding-top: 5px;
  margin: 0 auto;
  max-width: 230px;
  margin-bottom: 1.45rem;
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

const ContactMe = styled.div`
  h3 {
    position: relative;
    font-size: 30px;
    font-weight: 200;
    z-index: -1;
    text-align: center;
  }
  h3:before, h3:after {
    position: absolute;
    top: 50%;
    overflow: hidden;
    width: 51%;
    height: 1px;
    content: '\a0';
    background-color: #444;
}
h3:before {
    margin-left: -50%;
    text-align: right;
}

span {
  font-family: 'Sacramento', cursive;
  margin: 0 20px;
}
`

const Contact = () => (
  <Layout>
        <SEO title="Contact" />
            <Wrapper>
                <LogoContainer>
                      <Image />
                </LogoContainer>
                <h4>Lorem ipsum dolor amet disrupt 3 wolf moon normcore</h4>

                  <ContactMe>
                    <h3 className="decorated"><span>Contact Me</span></h3>
                  </ContactMe>      
                
                <form action="#">
                  <FormContainer>

                  <InputStyles type="name" placeholder="Name"/>


                  <InputStyles type="email" placeholder="Email"/>

                  <TextArea name="" id="" cols="30" rows="6" placeholder="Message">
                  </TextArea>
                  <Btn type="submit">Send</Btn>
                  </FormContainer>  
                </form>

                <h5>QUESTIONS OR COMMENTS?</h5>

                <p>Lorem ipsum dolor amet disrupt 3 wolf moon normcore, keytar ramps lumbersexual
                  thundercats snackwave church-key cliche blog. Flexitarian venmo tousled banjo
                  ramps air plant PBR&B. Shaman jianbing mustache craft beer paleo polaroid, pabst
                  lumbersexual man braid. Gluten-free marfa butcher mustache hot chicken, small
                  batch occupy raclette vape actually cornhole slow-carb schlitz.
                </p>

                <h5>Company Name</h5>    
                
                <p>
                tel.<a href=""> 415 415 4155</a>
                </p>
                
            </Wrapper>   
            <div style={{ margin: `0 auto`,maxWidth: `950px` }}>
              <hr /> 
            </div>
        <FooterStyles>
            <div>
              Copyright © {new Date().getFullYear()},  CompanyName - All Rights Reserved
            </div>

            <div style={{ textAlign: 'right', }}>
              <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
            </div>
        </FooterStyles>
      </Layout>
)

export default Contact
