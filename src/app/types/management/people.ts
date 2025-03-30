import { Role } from './roles'

// NOTE: 타입 작성 완료까지 임시적으로 any허용
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface People {
  id: string
  first_name: string
  last_name: string
  sex: string
  blood_type: string
  serve_years: number
  role: Role
  team: string
  from: string
  tools: any
  givens: any
}
