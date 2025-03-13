import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const HomeBoardBox = ({ children }: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={'90px'}
    >
      {children}
    </Box>
  )
}

export default HomeBoardBox
