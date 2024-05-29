import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'

import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
