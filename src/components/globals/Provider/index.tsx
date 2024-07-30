// External
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { inject } from '@vercel/analytics';

// Screens
import { Users, User, Error } from '../../screens';

// Creating a new router instance.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
    errorElement: <Error />,
  },
  {
    path: '/users/:userId',
    element: <User />,
  },
]);

// Creating a new instance of the QueryClient.
const queryClient = new QueryClient();

// A custom component that wraps the entire application with the QueryClientProvider and RouterProvider.
export default function Provider() {
  inject();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
