import React, { Suspense } from 'react'
import MoviesTemplate from '@/app/components/templates/movies/page'

export default function Movies() {
  return (
    <div>
      <Suspense fallback={<div>Loading ......</div>}>
        <MoviesTemplate />
      </Suspense>
    </div>
  )
}
