import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 700px;
  grid-template-columns: 1fr;
  text-align: center;
`

const Contact = () => (
  <Layout>
      <SEO title="Contact" />
      
      <form action="">
        <FormContainer>

        <input type="name" placeholder="Name"/>


        <input type="email" placeholder="Email"/>

        <textarea name="" id="" cols="30" rows="10">
        </textarea>
        <button type="submit">Send</button>
      </FormContainer>  
      </form>
    </Layout>
)

export default Contact
