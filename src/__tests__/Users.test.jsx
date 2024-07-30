import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from '../components/globals';

describe('users', () => {
  it('renders the users page', async () => {
    // Render the users page
    render(<Provider />);
    // Check if loading is rendered
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // Check if users title is rendered
    expect(screen.getByTestId('users-title')).toBeInTheDocument();
  });
  it('renders the users card', async () => {
    // Render the users page
    render(<Provider />);
    // Check if loading is rendered
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // Check if users title is rendered
    expect(screen.getByTestId('users-title')).toBeInTheDocument();
    // Check if users card is rendered
    const usersCard = await screen.findAllByTestId('users-card');
    expect(usersCard).toHaveLength(10);

    // Check if users card title is rendered
    expect(screen.getByTestId('users-card-title-1')).toBeInTheDocument();
  });
});
