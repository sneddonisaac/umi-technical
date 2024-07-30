// External
import { Link } from 'react-router-dom';

// Types
import { User, Post } from '../../../types/global.ts';

export default function Card({ user, post }: { user?: User; post?: Post }) {
  return user ? (
    <Link
      to={`/users/${user.id}`}
      className="users__container-card"
      id={`users-card-${user.id}`}
      data-testid={`users-card`}
    >
      <h2 data-testid={`users-card-title-${user.id}`}>{user.username}</h2>
      <span>@{user.username}</span>
    </Link>
  ) : (
    <Link
      to={`/posts/${post?.id}`}
      className="posts__card"
      data-testid="posts-card"
      id={`posts-card-${post?.id}`}
    >
      <h2>{post?.title}</h2>
    </Link>
  );
}
