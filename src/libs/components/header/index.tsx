import { Button, Grid, Stack } from '@mui/material';
import NavLinks from '../nav-links';
import { links } from '@/libs/constants';

function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={'center'}
      width={'100%'}
      height={'80px'}
      zIndex={10}
      sx={{ bgcolor: 'blackBase.main', position: 'sticky', top: 0 }}
    >
      <Grid
        width={{ xl: '50%', md: '800px', sm: '580px', xs: '320px' }}
        container
        direction="row"
        wrap="nowrap"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <NavLinks links={links} />
        <Grid
          container
          direction={'row'}
          wrap="nowrap"
          gap="24px"
          width="fit-content"
          display={{ sm: 'flex', xs: 'none' }}
        >
          <Button sx={{ fontSize: { xl: '24px', md: '20px', xs: '16px' } }}>Log In</Button>
          <Button sx={{ fontSize: { xl: '24px', md: '20px', xs: '16px' } }}>Join Free</Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Header;
