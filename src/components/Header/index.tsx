import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Logo Eplay" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categoriais</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
