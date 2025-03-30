// NOTE: 타입 작성 완료까지 임시적으로 any허용
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Role {
  id: string
  job: string
  requirement: string
  members: any
  equipments: any
  softwares: any
}
