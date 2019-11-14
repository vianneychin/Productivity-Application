import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import gmail from '../assets/icons/auth/gmail.svg'
import linkedin from '../assets/icons/auth/linkedin.svg'
import github from '../assets/icons/auth/github.svg'
import email from '../assets/icons/auth/email.svg'

const StyledButton = styled(Button)`
  && {
    margin-left: 30px;
    background-color: rgb(245, 245, 245);
    color: rgb(30, 30, 30);
    text-transform: none;
    span:nth-of-type(1) {
      justify-content: normal;
      font-weight: 500;
      font-size: 16px;
    }
    img {
      height: 20px;
      width: 20px;
      margin-right: 15px;
      margin-left: 15px;
      /* visibility: hidden; */
    }
  }
`

export const AuthButton = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <StyledButton variant='contained'>
      <img src={gmail} />
      login with Google
    </StyledButton>
    <br />
    <StyledButton variant='contained'>
      <img src={linkedin} />
      login with LinkedIn
    </StyledButton>
    <br />
    <StyledButton variant='contained'>
      <img src={github} />
      login with Github
    </StyledButton>
    <br />
    <StyledButton variant='contained'>
      <img src={email} />
      login with Email
    </StyledButton>
  </div>
)

export const Auth = (props: any) => (
  <StyledButton variant='contained'>
    <img src={props.image} alt={props.alt} />
    Login with Google
  </StyledButton>
)
