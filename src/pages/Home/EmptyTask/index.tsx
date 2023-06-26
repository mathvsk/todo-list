import empty from '../../../assets/empty.svg'
import { EmptyContainer } from './style'

export function EmptyTask() {
  return (
    <EmptyContainer>
      <img src={empty} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </EmptyContainer>
  )
}
