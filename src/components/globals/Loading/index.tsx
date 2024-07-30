import React from 'react';
import './loading.scss';

import { hourglass } from 'ldrs';

export default function Loading({
  status,
  children,
  error,
}: {
  status: string;
  children?: React.ReactNode;
  error?: Error | null;
}) {
  // Register hourglass for loading animation
  hourglass.register();

  // Render loading if both query is pending error if there is an error or render children if data is available
  if (status === 'pending') {
    return (
      <div className="loading" data-testid="loading">
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
          color="white"
        ></l-hourglass>
      </div>
    );
  } else if (status === 'error') {
    return (
      <div className="error">
        <h3>We apologise for the inconvenience.</h3>
        <p>Something went wrong.</p>
        <p>Error: {error?.message}</p>
      </div>
    );
  } else {
    return children;
  }
}
