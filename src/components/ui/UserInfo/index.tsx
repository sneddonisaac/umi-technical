import { Post, User } from '../../../types/global.ts';

export default function UserInfo({
  user,
  post,
}: {
  user?: User;
  post?: Post[];
}) {
  return (
    <div className="user__container-info" data-testid="user-info">
      <div className="user__container-info--top">
        <h2>{user?.name}</h2>
        <span>@{user?.username}</span>
      </div>
      <div className="user__container-info--bottom">
        <a
          href={`mailto:${user?.email}`}
          className="user__container-info--bottom-link"
        >
          <span>{user?.email}</span>
        </a>
        <p>
          Posts: <span>{post?.length}</span>
        </p>
      </div>
    </div>
  );
}
