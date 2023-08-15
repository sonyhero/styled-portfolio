import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f3f3f3;
  font-family: 'Inter', sans-serif;
  font-style: normal;
}


`
