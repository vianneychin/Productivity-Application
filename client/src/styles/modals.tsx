import React from 'react'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'

import { CustomModalProps } from '../types'

const CustomModal = ({
  open,
  className,
  onClose,
  children
}: CustomModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={className}>
        <form>{children}</form>
      </div>
    </Modal>
  )
}

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
