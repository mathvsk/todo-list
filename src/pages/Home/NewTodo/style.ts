import styled from 'styled-components'

export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  input {
    width: 39.9375rem;
    height: 3.375rem;

    padding: 1rem 0 1rem 1rem;

    background: ${({ theme }) => theme['gray-500']};

    border-radius: 8px;

    &:focus {
      outline: transparent;
      box-shadow: 0px 0px 0px 1px ${({ theme }) => theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    border: none;
    border-radius: 8px;

    background: ${({ theme }) => theme['blue-dark']};

    font-weight: 700;
    font-size: 0.875rem;

    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.blue};
    }
  }
`
