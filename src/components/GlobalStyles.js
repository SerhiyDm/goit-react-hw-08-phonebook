import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Kanit', sans-serif;
font-family: 'Permanent Marker', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e0cccc;

}

a {
text-decoration: none;
color: currentColor;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1{
  color: #e0cccc;
  font-size: 64px;
  letter-spacing:.1em ;
}
h2 {
  font-size: 30px;
}

h3 {
  font-size: 1.5em;
  color: #9da5a8;
}
`;
