import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#333',
  verde: '#111',
  cinza: '#EEEEEE',
  preta: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preta}
  }
`
