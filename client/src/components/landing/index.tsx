import React, { useState } from 'react'
import styled from 'styled-components'
import { AuthButton } from '../../styles/Buttons/AuthButton'
import { RegisterModal } from './RegisterModal'
import { LoginModal } from './LoginModal'
import gmail from '../../assets/icons/auth/gmail.svg'
import linkedin from '../../assets/icons/auth/linkedin.svg'
import github from '../../assets/icons/auth/github.svg'
import email from '../../assets/icons/auth/email.svg'
import lock from '../../assets/icons/auth/lock.svg'

type StyleProps = {
  className?: string
}

export const Landing = ({ className }: StyleProps) => {
  const [isRegisterModalOpen, setRegisterModal] = useState(false)
  const [isLoginModalOpen, setLoginModal] = useState(true)

  const handleRegisterModalOpen = () => setRegisterModal(true)
  const handleRegisterModalClose = () => setRegisterModal(false)
  const handleLoginModalOpen = () => setLoginModal(true)
  const handleLoginModalClose = () => setLoginModal(false)

  return (
    <>
      <RegisterModal
        open={isRegisterModalOpen}
        onClose={handleRegisterModalClose}
      />
      <LoginModal open={isLoginModalOpen} onClose={handleLoginModalClose} />
      <div className={className}>
        <div />
        <div>
          <div>
            <img src={lock} alt='lock' />
            <h1>Sign In</h1>
          </div>
          <div>
            <AuthButton authProvider='Google' icon={gmail} alt='google-icon' />
            <AuthButton
              authProvider='LinkedIn'
              icon={linkedin}
              alt='linkedin-icon'
            />
            <AuthButton authProvider='GitHub' icon={github} alt='github-icon' />
            <span onClick={handleLoginModalOpen}>
              <AuthButton authProvider='Email' icon={email} alt='email-icon' />
            </span>
          </div>
          <p>
            <span onClick={handleRegisterModalOpen}>
              Don't have an account? Sign up
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

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
    background-color: ${props => props.theme.colors.channel_orange};
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
        color: ${props => props.theme.colors.soft_white};
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
      > span {
        color: rgb(60, 60, 222);
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
