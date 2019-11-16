import React from 'react'
import { createPortal } from 'react-dom'
import TextField from '@material-ui/core/TextField'
import { StyledModal } from '../../styles/Modals'
import { CustomModalProps } from '../../types'
import { StyledButton as RegisterButton } from '../../styles/RegisterAndLoginButton'

const modal = document.getElementById('register-modal') as HTMLElement

export const RegisterModal = ({ open, onClose }: CustomModalProps) =>
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
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='verify-password'
        label='Verify Password'
        type='password'
        id='verify-password'
        autoComplete='current-password'
      />
      <RegisterButton type='submit' fullWidth variant='contained'>
        Register
      </RegisterButton>
    </StyledModal>,
    modal
  )
