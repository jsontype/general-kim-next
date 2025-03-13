import { atom } from 'jotai'
import { MoviesData } from '../types/movies'

export const moviesDataAtom = atom<MoviesData[]>([])
