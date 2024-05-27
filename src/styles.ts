import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#eee',
  verde: '#10AC84',
  cinza: '#333',
  preta: '#111'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
  }
`
