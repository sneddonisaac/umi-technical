// External
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from '@phosphor-icons/react';

// Styles
import './user.scss';

// Query
import { getUserPostsQuery, getUserQuery } from '../../../../utils/queries.ts';

// Types
import { Filters as FiltersType, Post } from '../../../../types/global.ts';

// Components
import { Card, Loading } from '../../../globals';
import { Filters, UserInfo } from '../../../ui';

export default function User() {
  // Get userId from url
  const { userId } = useParams();
  // Set filters
  const [filters, setFilters] = React.useState<FiltersType>({
    sortOrder: 'Ascending',
  });
  // Set posts initial state
  const [posts, setPosts] = React.useState<Post[] | undefined>([]);

  // Get posts
  const {
    status: postsStatus,
    data: postsData,
    error: postsError,
  } = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getUserPostsQuery(userId),
    enabled: !!userId,
  });

  // Set posts initial state
  React.useEffect(() => {
    setPosts(postsData);
  }, [postsData, userId]);

  // Sort posts based on filters state
  React.useEffect(() => {
    if (filters.sortOrder === 'Descending') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setPosts([...posts]?.sort((a, b) => b.id - a.id));
    } else if (filters.sortOrder === 'Ascending') {
      setPosts([...posts]?.sort((a, b) => a.id - b.id));
    }
  }, [filters]);

  // Get user
  const {
    status: userStatus,
    data: userData,
    error: userError,
  } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUserQuery(userId),
    enabled: !!userId,
  });

  return (
    <main className="user">
      <h1 data-testid="posts-title">Posts</h1>
      <section className="user__pagination">
        <Link to="/" className="user__pagination-link">
          <ArrowLeft size={20} className="user__pagination-icon" />
          Back
        </Link>
        <Filters filters={filters} setFilters={setFilters} />
      </section>
      <section className="user__container">
        <Loading status={userStatus} error={userError}>
          <UserInfo user={userData} post={postsData} />
        </Loading>
        <Loading status={postsStatus} error={postsError}>
          <Posts posts={posts} />
        </Loading>
      </section>
    </main>
  );
}

const Posts = ({ posts }: { posts?: Post[] }) => {
  return (
    <div className="user__container-posts">
      {posts?.map((post: Post) => <Card key={post.id} post={post} />)}
    </div>
  );
};
