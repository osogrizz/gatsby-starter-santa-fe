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
  align-content: center;
`

const InputStyles = styled.input`
  height: 50px;
  margin: 10px;

`

const Btn = styled.button`
  margin: 20px auto;
  border-radius: 40px;
  border-color: #222;
  padding: 5px;
  width: 90px;
`

const Contact = () => (
  <Layout>
      <SEO title="Contact" />
      
      <form action="#">
        <FormContainer>

        <InputStyles type="name" placeholder="Name"/>


        <InputStyles type="email" placeholder="Email"/>

        <textarea name="" id="" cols="30" rows="10" placeholder="Message">
        </textarea>
        <Btn type="submit">Send</Btn>
      </FormContainer>  
      </form>
    </Layout>
)

export default Contact
