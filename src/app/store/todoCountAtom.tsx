import { atom } from 'jotai'

export const todoCountAtom = atom({
  total: 0,
  none: 0,
  done: 0,
})
