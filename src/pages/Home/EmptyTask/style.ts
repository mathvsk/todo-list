import styled from 'styled-components'

export const EmptyContainer = styled.div`
  text-align: center;

  padding: 4rem 1.5rem;

  border-top: 1px solid #333333;
  border-radius: 8px;

  img {
    width: 54px;
    height: 54px;
  }

  p {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    color: ${({ theme }) => theme['gray-300']};
  }
`
