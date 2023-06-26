import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  max-width: 46rem;
  margin: 0 auto;
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & > :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 0.875rem;

    padding-bottom: 0.75rem;

    & > p {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-weight: 700;
    }

    & > :nth-child(1) {
      color: ${({ theme }) => theme.blue};
    }

    & > :nth-child(2) {
      color: ${({ theme }) => theme.purple};
    }

    & span {
      color: ${({ theme }) => theme['gray-200']};
      background: ${({ theme }) => theme['gray-400']};
      border-radius: 999px;

      font-size: 0.75rem;

      padding: 0.125rem 0.5rem;
    }
  }
`
export const TasksContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 0.75rem;

  padding: 1rem;

  background: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  line-height: 140%;

  & > :first-child {
    display: flex;
    gap: 0.75rem;

    & > button {
      flex-shrink: 0; // Utilizei dessa propriedade pq o display flex da minha div pai, tava afetando o tamanho do meu checkbox
    }
  }

  & > :nth-child(2) {
    display: flex;

    padding: 0.25rem;

    border-radius: 4px;

    color: ${({ theme }) => theme['gray-300']};

    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.danger};
      background: ${({ theme }) => theme['gray-400']};
    }
  }
`
export const CheckBoxRoot = styled(Checkbox.Root)`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.blue};

  transition: background 0.2s;

  &[data-state='checked'] {
    border-color: ${({ theme }) => theme['purple-dark']};
    background: ${({ theme }) => theme['purple-dark']};

    transition: all 0.2s;

    ~ span {
      color: ${({ theme }) => theme['gray-300']};
      text-decoration: line-through;
    }

    &:hover {
      border-color: ${({ theme }) => theme.purple};
      background: ${({ theme }) => theme.purple};
      opacity: 0.9;
    }
  }

  &[data-state='unchecked']:hover {
    background: rgba(0, 119, 190, 0.2);
  }
`
