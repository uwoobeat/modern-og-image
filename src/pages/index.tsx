import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Modern OG Image Generator</title>
        <meta
          name="description"
          content="A modern Open Graph image generator for your blog posts"
        />
        <meta property="og:title" content="modern-og-image" />
        <meta
          property="og:description"
          content="A modern Open Graph image generator for your blog posts"
        />
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  );
}
