import * as React from "react";

import Link from "../components/Link";

const NotFoundPage = () => {
  return (
    <section className="page-404">
      <div className="page-404__wrapper">
        <h1>Page not found</h1>
        <p className="h4">
          Sorry, but the page you were trying to view does not exist.
        </p>
        <Link to="/" className="btn">
          <span>Return home →</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

export function Head() {
  return (
    <>
      <title>Page not found | Sixzero</title>
    </>
  );
}
