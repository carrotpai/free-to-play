import { Grid, Box, Select, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import GamesList from '../games-list';
import CheckboxGroup from '../checkbox-group';
import { useAppDispatch, useAppSelector } from '@/libs/store';
import { platforms } from '@/libs/constants';
import { changePlatform } from '@/libs/store/games-filter';

function GamesFilter() {
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      direction={'row'}
      gap={'12px'}
      wrap="nowrap"
      width={'100%'}
      justifyContent={'space-between'}
    >
      <Box>
        <Grid
          width={'680px'}
          container
          direction={'row'}
          justifyContent={'space-between'}
          wrap="nowrap"
          sx={{ background: 'rgba( 0, 0, 0, 0.2 )', marginBottom: '24px' }}
        >
          <Grid container direction={'row'} gap="12px" wrap="nowrap">
            <TextField size="small" />
            <Button>Поиск</Button>
          </Grid>
          <Grid container direction={'row'} gap="8px" alignItems={'center'} justifyContent={'end'}>
            <Typography>Сортировать по</Typography>
            <Select size="small" />
          </Grid>
        </Grid>
        <Grid>
          <GamesList queryArgs={filterState} />
        </Grid>
      </Box>
      <Grid container direction={'column'} wrap="nowrap" gap={'16px'} width={'fit-content'}>
        <CheckboxGroup
          title="Платформа"
          items={platforms}
          type="one"
          value={filterState.platform}
          onChangeItem={(e) => {
            dispatch(changePlatform(e.target.name));
          }}
        />
      </Grid>
    </Grid>
  );
}

export default GamesFilter;
