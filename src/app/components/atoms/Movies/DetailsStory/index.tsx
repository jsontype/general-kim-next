'use client'

import { MoviesData } from '@/app/types/movies'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  movie: MoviesData
}

const DetailsStory = ({ movie }: Props) => {
  const { t } = useTranslation('movies')
  const [isOpenAllText, setIsOpenAllText] = useState(false)

  const { synopsis } = movie
  if (synopsis.length > 500) {
    return (
      <>
        {isOpenAllText ? (
          synopsis
        ) : (
          <span>
            {synopsis.substr(0, 500)}...{' '}
            <button
              style={{ color: '#666666' }}
              onClick={() => setIsOpenAllText(true)}
            >
              {t('item.showMore')}
            </button>
          </span>
        )}
      </>
    )
  } else if (synopsis.length === 0) {
    return t('item.noInfo')
  } else {
    return synopsis
  }
}

export default React.memo(DetailsStory)
