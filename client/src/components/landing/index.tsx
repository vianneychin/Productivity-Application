import React from 'react'
import styled from 'styled-components'
import { AuthButton } from '../../styles/buttons'

import gmail from '../../assets/icons/auth/gmail.svg'
import linkedin from '../../assets/icons/auth/linkedin.svg'
import github from '../../assets/icons/auth/github.svg'
import email from '../../assets/icons/auth/email.svg'
import lock from '../../assets/icons/auth/lock.svg'

export const Landing = ({ className }: any) => (
  <div className={className}>
    <div />
    <div>
      <div>
        <img src={lock} alt='lock' />
        <h1>Sign In</h1>
      </div>
      <div>
        <AuthButton authProvider='Google' icon={gmail} alt='google-icon' />
        <AuthButton authProvider='LinkedIn' icon={linkedin} alt='google-icon' />
        <AuthButton authProvider='GitHub' icon={github} alt='google-icon' />
        <AuthButton authProvider='Email' icon={email} alt='google-icon' />
      </div>
      <p>
        <a href='#'>Don't have an account? Sign up</a>
      </p>
    </div>
  </div>
)

export const StyledLanding = styled(Landing)`
  height: 100%;
  width: 100vw;
  display: flex;
  > div:nth-of-type(1) {
    width: 50%;
    height: 100%;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  > div:nth-of-type(2) {
    background-color: #ff7e30;
    width: 50%;
    height: 100%;
    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20%;
      > img {
      }
      h1 {
        font-size: 24px;
        font-weight: 400;
        color: rgb(240, 240, 240);
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 235px;
      justify-content: space-evenly;
    }
    > p {
      text-align: center;
      > a {
        color: rgb(60, 60, 222);
      }
    }
  }
`
