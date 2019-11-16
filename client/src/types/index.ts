export type CustomModalProps = {
  open: boolean
  onClose: () => void | undefined
  children?: React.ReactNode
  className?: string
}

export type AuthButtonTypes = {
  icon: string
  alt: string
  authProvider: string
  onClick?: () => void
}
