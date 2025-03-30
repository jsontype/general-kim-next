'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import NavbarItem from '../../atoms/NavbarItem'
import { useTranslation } from 'react-i18next'
import SelectLanguage from '../../atoms/SelectLanguage'

export default function Navbar() {
  const { t } = useTranslation('navbar')

  return (
    <>
      <Box
        sx={{
          marginBottom: '8px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              gap: '10px',
            }}
          >
            <NavbarItem link={'/'} text={t('home')} />
            <NavbarItem link={'/movies'} text={t('movies')} />
            <NavbarItem link={'/count'} text={t('count')} />
            <NavbarItem link={'/news'} text={t('news')} />
            <NavbarItem link={'/todos'} text={t('todos')} />
            <NavbarItem link={'/management'} text="management" />
          </Box>
          <SelectLanguage />
        </Box>
        <hr />
      </Box>
    </>
  )
}
