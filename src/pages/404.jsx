import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="page-header page-header--centered">
        <div className="page-header_copy">
          <h1>Page not found</h1>
          <p className="h4">
            Sorry, but the page you were trying to view does not exist.
          </p>
          <Link to="/" className="btn">
            Return home →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export function Head() {
  return (
    <>
      <title>Page not found | Sixzero</title>
      <body className="page-404" />
    </>
  );
}
