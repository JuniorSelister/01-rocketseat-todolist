import styled from 'styled-components'

export const BodyContainer = styled.main`
  width: 70rem;
  margin: -2rem auto;

  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`

export const HeaderInput = styled.div`
  display: flex;
  width: 46rem;
  gap: 0.5rem;

  input {
    width: 39.875rem;
    height: 3.375rem;
    padding: 1.2rem;
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};
    border: 1px solid transparent;
    width: 5.625rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 400;
    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme['blue-light']};
  }
`

export const HeaderList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['blue-light']};
`

export const HeaderListItem = styled(HeaderList)`
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  .finished-h2 {
    color: ${(props) => props.theme['purple-light']};
  }

  .finished-span {
    width: 3.25rem;
    height: 1.188rem;
    font-size: 0.75rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-200']};
    background: ${(props) => props.theme['gray-400']};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:not(.finished-span) {
    font-size: 0.75rem;
    width: 1.563rem;
    height: 1.188rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-200']};
    background: ${(props) => props.theme['gray-400']};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

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
