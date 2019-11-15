import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import { CustomModalProps } from './registerModal'

const modal = document.getElementById('login-modal') as HTMLElement

export const LoginModal = ({ isOpen, onClose, className }: CustomModalProps) =>
  createPortal(
    <Modal open={isOpen} onClose={onClose}>
      <div className={className}>sup</div>
    </Modal>,
    modal
  )
