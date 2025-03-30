'use client'

import { People } from '@/app/types/management/people'
import { Role } from '@/app/types/management/roles'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`

const GET_ROLE = gql`
  query Role($id: ID!) {
    role(id: $id) {
      id
      members {
        id
        first_name
        last_name
      }
      equipments {
        id
      }
      softwares {
        id
      }
      requirement
    }
  }
`

export const ManageMentTemplate = () => {
  const [contentId, setContentId] = useState('')

  useEffect(() => {
    setContentId('developer')
  }, [])

  const { loading, error, data } = useQuery<{ role: Role }>(GET_ROLE, {
    variables: { id: contentId },
  })

  console.log(data)

  return (
    <>
      <div>
        {data?.role.members.map((member: People) => {
          return <p key={member.id}>{member.first_name}</p>
        })}
      </div>
    </>
  )
}
