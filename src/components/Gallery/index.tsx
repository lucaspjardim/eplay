import Section from '../Section'

import hogwarts from '../../assets/images/foto1.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={hogwarts} alt="Imagem do Itemnk" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do Itemnk" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do Itemnk" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do Itemnk" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
