import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GiftHub</title>
        <meta name="description" content="Get free stuff for your birthday." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  );
}
