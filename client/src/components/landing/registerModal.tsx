import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { StyledModal } from '../../styles/modals'

import { CustomModalProps } from '../../types'

const modal = document.getElementById('register-modal') as HTMLElement

export const RegisterModal = ({ className, open, onClose }: CustomModalProps) =>
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
      <StyledButton type='submit' fullWidth variant='contained'>
        Register
      </StyledButton>
    </StyledModal>,
    modal
  )

// export const RegisterModal = ({
//   isOpen,
//   className,
//   onClose
// }: CustomModalProps) =>
//   createPortal(
//     <Modal open={isOpen} onClose={onClose}>
//     </Modal>,
//     modal
//   )

const StyledButton = styled(Button)`
  && {
    background-color: #ff7e30;
    color: rgb(240, 240, 240);
    align-self: flex-end;
    justify-self: flex-end;
    position: relative;
    top: 15%;
    > span {
      font-weight: bold;
      text-transform: none;
    }
  }
`
