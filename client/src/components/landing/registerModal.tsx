import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const modal = document.getElementById('register-modal') as HTMLElement

export type CustomModalProps = {
  isOpen: boolean
  onClose: () => void | undefined
  className?: string
}

const CustomModal = ({ isOpen, className, onClose }: CustomModalProps) =>
  createPortal(
    <Modal open={isOpen} onClose={onClose}>
      <div className={className}>
        <form>
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
        </form>
      </div>
    </Modal>,
    modal
  )

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

export const StyledModal = styled(CustomModal)`
  position: absolute;
  min-width: 385.5px;
  min-height: 344.49px;
  width: 50%;
  height: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4%;
  background-color: rgb(240, 240, 240);
  outline: 0;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  > form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`
