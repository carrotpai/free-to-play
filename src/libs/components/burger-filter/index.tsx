import ReactDOM from 'react-dom';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@/libs/store';
import { Box, Button, Collapse, Grid } from '@mui/material';
import { changePlatform, changeTags, clearFilter } from '@/libs/store/games-filter';
import { platforms, tags } from '@/libs/constants';
import CheckboxGroup from '../checkbox-group';
import BurgerOverlay from '../burger-overlay';

const modalRoot = document.getElementById('modals') as HTMLElement;

function BurgerFilter() {
  const [isVisible, setIsVisible] = React.useState(false);
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dispatch = useAppDispatch();
  return ReactDOM.createPortal(
    <>
      <Grid
        position={'relative'}
        alignItems={'start'}
        container
        direction={'row'}
        width={'auto'}
        height={'100vh'}
        wrap="nowrap"
        gap={'8px'}
        sx={{ position: 'fixed', bottom: '0', right: '0', zIndex: 180 }}
      >
        <Box
          component={'button'}
          onClick={() => setIsVisible((val) => !val)}
          sx={{
            border: 'none',
            background: 'none',
            heigh: '64px',
            position: 'absolute',
            top: '20%',
            left: '-64px',
          }}
        >
          {!isVisible ? (
            <MenuIcon
              sx={{ color: (theme) => theme.palette.whiteBase.main, width: '48px', height: '48px' }}
            />
          ) : (
            <CloseIcon
              sx={{ color: (theme) => theme.palette.whiteBase.main, width: '48px', height: '48px' }}
            />
          )}
        </Box>
        <Collapse in={isVisible} orientation="horizontal" sx={{ height: '100%' }}>
          <Box
            sx={{
              background: '#142332',
              height: '100%',
              overflowY: 'auto',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Grid
              container
              direction={'column'}
              margin={'0 auto'}
              paddingTop={'64px'}
              paddingBottom={'24px'}
              wrap="nowrap"
              gap={'20px'}
              width={'85%'}
            >
              <CheckboxGroup
                isVisible
                title="Платформа"
                items={platforms}
                type="one"
                value={filterState.platform}
                onChangeItem={(e) => {
                  dispatch(changePlatform(e.target.name));
                }}
              />
              <CheckboxGroup
                isVisible
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
          </Box>
        </Collapse>
      </Grid>
      {isVisible && (
        <BurgerOverlay
          handleClose={() => {
            setIsVisible(false);
          }}
        />
      )}
    </>,
    modalRoot
  );
}

export default BurgerFilter;
