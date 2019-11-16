import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
  && {
    background-color: ${props => props.theme.colors.channel_orange};
    color: ${props => props.theme.colors.soft_white};
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
