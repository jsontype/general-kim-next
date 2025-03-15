'use client'

import { useAtom, useAtomValue } from 'jotai'
import { todoStateAtom } from '../../../../store/todoStateAtom'
import React, { useCallback } from 'react'
import { todoCountAtom } from '../../../../store/todoCountAtom'
import { Box, Button } from '@mui/material'
import { TODOSTATE } from '@/app/types/todos'

const TodosCounter = () => {
  const [todoState, setTodoState] = useAtom(todoStateAtom)
  const { total, none, done } = useAtomValue(todoCountAtom)

  const onChangeTodoState = useCallback(
    (state: TODOSTATE) => {
      setTodoState(state)
    },
    [setTodoState]
  )

  return (
    <Box>
      <Button
        variant={todoState === 'total' ? 'contained' : undefined}
        onClick={() => onChangeTodoState('total')}
      >{`total: ${total}`}</Button>
      <Button
        variant={todoState === 'none' ? 'contained' : undefined}
        color="error"
        onClick={() => onChangeTodoState('none')}
      >{`none: ${none}`}</Button>
      <Button
        variant={todoState === 'done' ? 'contained' : undefined}
        color="success"
        onClick={() => onChangeTodoState('done')}
      >{`done: ${done}`}</Button>
    </Box>
  )
}

export default React.memo(TodosCounter)
