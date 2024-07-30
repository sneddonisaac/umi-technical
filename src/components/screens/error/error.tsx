import { Link, useRouteError } from 'react-router-dom';
import './error.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go back home</Link>
    </main>
  );
}
