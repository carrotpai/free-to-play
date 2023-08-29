import { useAppDispatch, useAppSelector } from '@/libs/store';
import { Box, Button, Collapse, Grid } from '@mui/material';
import CheckboxGroup from '../checkbox-group';
import { platforms, tags } from '@/libs/constants';
import { changePlatform, changeTags, clearFilter } from '@/libs/store/games-filter';
import BurgerOverlay from '../burger-overlay';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modals') as HTMLElement;

interface BurgerFilterProps {
  isVisible: boolean;
  handleClose: () => void;
}

function BurgerFilter({ isVisible, handleClose }: BurgerFilterProps) {
  const filterState = useAppSelector((state) => state.gamesFilter);
  const dispatch = useAppDispatch();
  return ReactDOM.createPortal(
    <Box sx={{ position: 'fixed', height: '100vh', width: '100%' }}>
      <Collapse in={true} orientation="horizontal" sx={{ position: 'fixed' }}>
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
      </Collapse>
      <BurgerOverlay handleClose={handleClose} />
    </Box>,
    modalRoot
  );
}

export default BurgerFilter;
