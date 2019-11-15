export type CustomModalProps = {
  open: boolean
  onClose: () => void | undefined
  children?: React.ReactNode
  className?: string
}
