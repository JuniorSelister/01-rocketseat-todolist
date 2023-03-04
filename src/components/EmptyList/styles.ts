import styled from 'styled-components'

export const TodoBody = styled.div`
  height: 15.25rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-top: 2px solid ${(props) => props.theme['gray-400']};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    height: 3.5rem;
  }

  h2,
  span {
    font-size: 1rem;
  }

  h2 {
    color: ${(props) => props.theme['gray-300']};
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-weight: 400;
  }
`
