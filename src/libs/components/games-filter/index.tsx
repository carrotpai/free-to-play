import React from 'react';
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
import { ReactComponent as BurgerMenuIcon } from '@/assets/icons/menu.svg';
import BurgerFilter from '../burger-filter';

function GamesFilter() {
  const [isBurgerVisible, setIsBurgerVisible] = React.useState(false);
  const theme = useTheme();
  const isMediumMedia = useMediaQuery(theme.breakpoints.up('md'));
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dispatch = useAppDispatch();
  return (
    <>
      {!isMediumMedia && (
        <BurgerFilter isVisible={isBurgerVisible} handleClose={() => setIsBurgerVisible(false)} />
      )}
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ marginBottom: '16px' }}
      >
        <Typography variant="h6">Browse games</Typography>
      </Grid>
      <Grid
        container
        direction={'row'}
        wrap="nowrap"
        gap={'32px'}
        width={'100%'}
        justifyContent={'space-between'}
      >
        <Box sx={{ width: '75%' }}>
          <Grid
            container
            direction={'row'}
            justifyContent={'space-between'}
            wrap="nowrap"
            sx={{ background: 'rgba( 0, 0, 0, 0.2 )', marginBottom: '24px', padding: '8px 12px' }}
          >
            <Grid container direction={{ lg: 'row', md: 'column' }} gap="12px" wrap="nowrap">
              <TextField size="small" sx={{ width: { md: '200px', sm: '150px' } }} />
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
                sx={{ width: { xl: '200px', md: '150px' } }}
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
        </Box>
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
      </Grid>
    </>
  );
}

export default GamesFilter;
