import styled from 'styled-components'

export const HeaderContainer = styled.main`
  background: ${(props) => props.theme['gray-700']};

  header {
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 3rem;
  }
`
