import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  descriptions: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  descriptions,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt="" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{descriptions}</Descricao>
  </Card>
)

export default Product
