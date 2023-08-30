import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GamesList from '../games-list';
import CheckboxGroup from '../checkbox-group';
import { useAppDispatch, useAppSelector } from '@/libs/store';
import { platforms, sortOpts, tags } from '@/libs/constants';
import { changePlatform, changeSortType, changeTags, clearFilter } from '@/libs/store/games-filter';
import BurgerFilter from '../burger-filter';

function GamesFilter() {
  const theme = useTheme();
  const isMediumMedia = useMediaQuery(theme.breakpoints.up('md'));
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dispatch = useAppDispatch();
  return (
    <>
      {!isMediumMedia && <BurgerFilter />}
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ marginBottom: '16px' }}
      >
        <Typography id="filter-start" variant="h6">
          Browse games
        </Typography>
      </Grid>
      <Grid
        container
        direction={'row'}
        wrap="nowrap"
        gap={'32px'}
        width={'100%'}
        justifyContent={'space-between'}
      >
        <Box sx={{ width: { md: '75%', xs: '100%' } }}>
          <Grid
            component={'div'}
            container
            direction={{ md: 'row', xs: 'column' }}
            gap={{ md: 'auto', xs: '12px' }}
            justifyContent={'space-between'}
            wrap="nowrap"
            sx={{ background: 'rgba( 0, 0, 0, 0.2 )', marginBottom: '24px', padding: '8px 12px' }}
          >
            <Grid container direction={{ md: 'row', xs: 'row-reverse' }} gap="12px" wrap="nowrap">
              <TextField size="small" sx={{ width: { md: '200px', xs: '100%' } }} />
              <Button sx={{ fontSize: '16px' }}>Поиск</Button>
            </Grid>
            <Grid
              container
              direction={'row'}
              gap="8px"
              alignItems={'center'}
              justifyContent={'end'}
              wrap="nowrap"
            >
              <Typography fontSize={'14px'}>Сортировать</Typography>
              <TextField
                defaultValue={''}
                value={filterState.sortBy}
                onChange={(e) => {
                  dispatch(changeSortType(e.target.value));
                }}
                select
                size="small"
                label="sort"
                variant="outlined"
                sx={{ width: { xl: '200px', md: '150px', xs: '200px' } }}
              >
                {sortOpts.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid sx={{ minHeight: '900px' }}>
            <GamesList queryArgs={filterState} />
          </Grid>
          {!isMediumMedia && (
            <Box width={'100%'}>
              <Typography
                textAlign={'center'}
                display={'block'}
                component={'a'}
                href="#filter-start"
                color={(theme) => theme.palette.blueBase.main}
                sx={{ textDecoration: 'none', marginTop: '24px' }}
              >
                К началу
              </Typography>
            </Box>
          )}
        </Box>
        {isMediumMedia && (
          <Grid container direction={'column'} wrap="nowrap" gap={'16px'} width={'20%'}>
            <CheckboxGroup
              title="Платформа"
              items={platforms}
              type="one"
              value={filterState.platform}
              onChangeItem={(e) => {
                dispatch(changePlatform(e.target.name));
              }}
            />
            <CheckboxGroup
              title="Теги"
              items={tags}
              type="multiple"
              value={filterState.tags}
              onChangeItem={(e) => {
                dispatch(changeTags(e.target.name));
              }}
            />
            <Button onClick={() => dispatch(clearFilter())} sx={{ fontSize: '18px' }}>
              Очистить фильтр
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default GamesFilter;
