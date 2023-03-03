import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <img src={logo} alt="" />
      </header>
    </HeaderContainer>
  )
}
