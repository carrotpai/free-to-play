import { muiTheme } from '@/libs/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/libs/store';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs/utils';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
