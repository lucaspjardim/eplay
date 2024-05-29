import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://via.placeholder.com/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias quae
      quisquam necessitatibus odio fugiat nulla ea voluptatibus excepturi
      corporis magnam commodi obcaecati fugit aliquam dolores accusamus,
      consequuntur ipsam facilis!
    </Descricao>
  </Card>
)

export default Product
