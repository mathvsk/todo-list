import { PlusCircle } from '@phosphor-icons/react'
import { InputContainer } from './style'
import { ChangeEvent, FormEvent, useState } from 'react'

type AddNewTodoFunction = (todo: string) => void

export function NewTodo({
  onAddNewTodo,
}: {
  onAddNewTodo: AddNewTodoFunction
}) {
  const [newTodo, setNewTodo] = useState('')

  function handleChangeTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  function handleCreateNewTodo(event: FormEvent) {
    event?.preventDefault()

    onAddNewTodo(newTodo)

    setNewTodo('')
  }

  return (
    <InputContainer onSubmit={handleCreateNewTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={handleChangeTodo}
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </InputContainer>
  )
}
