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
  width: 90px;
`
const TextArea  = styled.textarea`
  margin-top: 10px;
`

const TextItems = styled.p`
  margin-top: 0;
  padding-top: 0;
  text-align: center;
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
    overflow: hidden;
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
                <TextItems>A BAG SHOULD BE A SCULPTURE BEFORE ANYTHING ELSE</TextItems>

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

                <h4>QUESTIONS OR COMMENTS?</h4>

                <p>Feel free to send me a message. I am available for commissions as well as for
                   shows. I always love to hear what viewers think of my work. I look forward to
                  hearing from you.
                </p>

                <h4>VON RUHTENBERG</h4>    

                <p>tel. 310 980 8849</p>
                
            </Wrapper>   
            <div style={{ margin: `0 auto`,maxWidth: `950px` }}>
              <hr /> 
            </div>
        <FooterStyles>
            <div>
              Copyright © {new Date().getFullYear()}, Von Ruhtenberg - All Rights Reserved
            </div>

            <div style={{ textAlign: 'right', }}>
              <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
            </div>
        </FooterStyles>
      </Layout>
)

export default Contact
