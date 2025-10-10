import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Devnagri</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div className="container text-center py-5">
        <h1 className="display-4">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    </>
  );
};

export default NotFound;
