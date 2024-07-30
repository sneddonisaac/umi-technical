import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from '../components/globals';

describe('posts', () => {
  it('renders the users page', async () => {
    // Render the users page
    render(<Provider />);

    // Check if users title is rendered
    expect(screen.getByTestId('users-title')).toBeInTheDocument();
    // Check if users card is rendered
    const usersCard = await screen.findAllByTestId('users-card');
    expect(usersCard).toHaveLength(10);
  });
  it('renders the user page', async () => {
    // Render the users page
    render(<Provider />);

    // Check if users title is rendered
    expect(screen.getByTestId('users-title')).toBeInTheDocument();
    // Check if users card is rendered
    const usersCard = await screen.findAllByTestId('users-card');
    expect(usersCard).toHaveLength(10);

    // Click the users card to load the posts page
    fireEvent.click(usersCard[0]);
    await usersCard[0].click();
    const loading = await screen.findAllByTestId('loading');
    expect(loading).toHaveLength(2);

    // Check if posts title is rendered
    expect(screen.getByTestId('posts-title')).toBeInTheDocument();

    const postsCard = await screen.findAllByTestId('posts-card');
    expect(postsCard).toHaveLength(10);
  });
});
