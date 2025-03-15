import { useMemo, useState } from 'react'
import { TodosData } from '../types/todos'

function useGetTodos() {
  const [todos, setTodos] = useState<TodosData[]>([])

  const loadTodos = () => {
    const storeData = localStorage.getItem('todos')
    const getData: TodosData[] = storeData ? JSON.parse(storeData) : []
    setTodos(getData)
  }
  const todoKey = useMemo(() => {
    return todos.length !== 0 ? todos[todos.length - 1].id : 0
  }, [todos])

  return { loadTodos, todoKey, todos }
}
export default useGetTodos
