import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'

const modal = document.getElementById('modal') as HTMLElement

type CustomModalProps = {
  isOpen: boolean
  className?: string
}

const CustomModal = ({ isOpen, className }: CustomModalProps) =>
  createPortal(
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={isOpen}
    >
      <div className={className}>Hello world</div>
    </Modal>,
    modal
  )

export const StyledModal = styled(CustomModal)`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`
