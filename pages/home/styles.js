import css from "styled-jsx/css"

export default css`
  header {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 49px;
    position: sticky;
    top: 0;
  }

  h2 {
    font-size: 21px;
    font-weight: 800;
  }

  section {
    padding-top: 49px;
  }

  nav {
    width: 100%;
    bottom: 0;
    border-top: 1px solid #ccc;
    height: 49px;
    position: sticky;
  }
`
