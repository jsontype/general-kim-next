import { atom } from 'jotai'
import { NewsData } from '../types/news'

export const newsDataAtom = atom<NewsData>({
  currentPage: 1,
  lastPage: 10, // api에서 제공되는 최대 페이지
  data: [],
})
