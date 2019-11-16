import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
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
