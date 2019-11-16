import React from 'react'
import { createPortal } from 'react-dom'
import TextField from '@material-ui/core/TextField'
import { StyledModal } from '../../styles/Modals'
import { CustomModalProps } from '../../types'
import { StyledButton as LoginButton } from '../../styles/RegisterAndLoginButton'

const modal = document.getElementById('login-modal') as HTMLElement

export const LoginModal = ({ open, onClose }: CustomModalProps) =>
  createPortal(
    <StyledModal open={open} onClose={onClose}>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
      />
      <LoginButton type='submit' fullWidth variant='contained'>
        Login
      </LoginButton>
    </StyledModal>,
    modal
  )
