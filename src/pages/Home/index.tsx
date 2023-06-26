import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'

import {
  CheckBoxRoot,
  MainContainer,
  TasksContainer,
  TasksContent,
} from './style'
import { Trash, Check } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { NewTodo } from './NewTodo'
import { EmptyTask } from './EmptyTask'

export interface Todo {
  id: string
  title: string
}

export function Home() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  function addNewTodo(newTodo: string) {
    setTodo([
      {
        id: String(Math.random()),
        title: newTodo,
      },
      ...todo,
    ])
  }

  function handleDeleteTask(taskID: string) {
    const filteredTasks = todo.filter((task) => task.id !== taskID)
    setTodo(filteredTasks)

    if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1)
    }
  }

  function updateNumberTodoChecked(checked: boolean | string) {
    if (checked) {
      setCompletedTasks(completedTasks + 1)
    } else {
      if (completedTasks > 0) {
        setCompletedTasks(completedTasks - 1)
      }
    }
  }

  return (
    <>
      <Header />

      <MainContainer>
        <NewTodo onAddNewTodo={addNewTodo} />

        <TasksContainer>
          <div>
            <p>
              Tarefas criadas
              <span>{todo.length}</span>
            </p>
            <p>
              Concluídas
              <span>
                {completedTasks} de {todo.length}
              </span>
            </p>
          </div>

          {todo.length === 0 ? (
            <EmptyTask />
          ) : (
            todo.map((todo) => (
              <TasksContent key={todo.id}>
                <label htmlFor={todo.id}>
                  <CheckBoxRoot
                    id={todo.id}
                    onCheckedChange={(target) =>
                      updateNumberTodoChecked(target)
                    }
                  >
                    <Checkbox.Indicator asChild>
                      <Check size={8} weight="bold" />
                    </Checkbox.Indicator>
                  </CheckBoxRoot>
                  <span>{todo.title}</span>
                </label>
                <button onClick={() => handleDeleteTask(todo.id)}>
                  <Trash size={16} />
                </button>
              </TasksContent>
            ))
          )}
        </TasksContainer>
      </MainContainer>
    </>
  )
}
