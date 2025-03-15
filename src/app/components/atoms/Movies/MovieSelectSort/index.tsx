import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useAtom, useSetAtom } from 'jotai'
import { moviesApiParamsAtom } from '../../../../store/moviesApiParamsAtom'
import { moviesFetchTriggerAtom } from '../../../../store/moviesFetchTriggerAtom'

const MovieSelectSort = () => {
  const [apiParams, setApiParams] = useAtom(moviesApiParamsAtom)
  const setIsFetchRequired = useSetAtom(moviesFetchTriggerAtom)
  const { t } = useTranslation('movies')

  const handleChange = (event: SelectChangeEvent) => {
    setApiParams({ ...apiParams, sort: event.target.value })
    setIsFetchRequired(true)
  }

  return (
    <FormControl
      variant="standard"
      sx={{ marginRight: '20px', minWidth: 110 }}
      size="small"
    >
      <InputLabel id="select-movie-params-sort">{t('sort.label')}</InputLabel>
      <Select
        labelId="select-movie-params-sort"
        id="select"
        value={apiParams.sort === '' ? 'default' : apiParams.sort}
        label="sort"
        onChange={handleChange}
      >
        <MenuItem value={'default'}>{t('sort.item.default')}</MenuItem>
        <MenuItem value={'title'}>{t('sort.item.title')}</MenuItem>
        <MenuItem value={'year'}>{t('sort.item.year')}</MenuItem>
        <MenuItem value={'rating'}>{t('sort.item.rating')}</MenuItem>
      </Select>
    </FormControl>
  )
}

export default MovieSelectSort
