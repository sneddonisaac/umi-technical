// External
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Styles
import './users.scss';

// Query
import { getUsersQuery } from '../../../utils/queries.ts';

// Components
import { Card, Loading } from '../../globals';

export default function Users(): React.ReactNode {
  // Get users
  const { status, data, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersQuery,
  });

  return (
    <main className="users">
      <h1 className="users__title" data-testid="users-title">
        Users
      </h1>
      <Loading status={status} error={error}>
        <section className="users__container">
          {data?.map((user) => <Card key={user.id} user={user} />)}
        </section>
      </Loading>
    </main>
  );
}
