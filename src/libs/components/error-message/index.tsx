import { Grid, Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorMessage() {
  return (
    <Grid container justifyContent={'center'}>
      <Box width={'400px'}>
        <Grid container justifyContent={'center'}>
          <ErrorOutlineIcon
            sx={{
              height: '48px',
              width: '48px',
              marginBottom: '12px',
              color: (theme) => theme.palette.blueBase.main,
            }}
          />
        </Grid>
        <Typography textAlign={'center'}>Ooops, something went wrong</Typography>
        <Typography sx={{ marginTop: '12px' }} textAlign={'center'}>
          Try again later, or contact Us
        </Typography>
      </Box>
    </Grid>
  );
}

export default ErrorMessage;
