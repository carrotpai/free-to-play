import { muiTheme } from '@/libs/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/libs/store';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
