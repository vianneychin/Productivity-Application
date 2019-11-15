import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  && {
    background-color: rgb(245, 245, 245);
    color: rgb(45, 45, 45);
    text-transform: none;
    width: 240.25px;
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
    }
  }
`

type AuthButtonTypes = {
  icon: string
  alt: string
  authProvider: string
}

export const AuthButton = (props: AuthButtonTypes) => (
  <StyledButton variant='contained'>
    <img src={props.icon} alt={props.alt} />
    Login with {props.authProvider}
  </StyledButton>
)
