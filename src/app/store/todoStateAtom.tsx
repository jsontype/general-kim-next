import { atom } from 'jotai'
import { TODOSTATE } from '../types/todos'

export const todoStateAtom = atom<TODOSTATE>('total')
