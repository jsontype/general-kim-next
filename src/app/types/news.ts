export interface NewsData {
  data: News[]
  currentPage: number
  lastPage: number
}

export interface News {
  id: number
  title: string
  points: number
  user: string
  time: number
  time_ago: string
  comments_count: number
  type: string
  url: string
  domain: string
}
