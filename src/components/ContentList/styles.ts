import styled from 'styled-components'

export const BodyContentList = styled.div`
  border-top: 2px solid ${(props) => props.theme['gray-400']};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const ContentListItem = styled(BodyContentList)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;

  width: 736px;
  height: 72px;

  background: ${(props) => props.theme['gray-500']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  .checkLayout {
    flex: none;
    order: 0;
    flex-grow: 0;

    background: transparent;
    color: ${(props) => props.theme['blue-light']};
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  button {
    background: transparent;
    border: 1px solid transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background: ${(props) => props.theme['gray-400']};
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => props.theme['red-danger']};
  }
`
