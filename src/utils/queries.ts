import { User, Post } from '../types/global.ts';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

// Get all users
export const getUsersQuery = async () => {
  const response = await fetch(`${BASE_URL}users`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result: User[] = await response.json();
  return result;
};

// Get user by id
export const getUserQuery = async (userId?: string) => {
  const response = await fetch(`${BASE_URL}users/${userId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result: User = await response.json();
  return result;
};

// Get posts by userId
export const getUserPostsQuery = async (userId?: string) => {
  const response = await fetch(`${BASE_URL}posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result: Post[] = await response.json();
  return result;
};
