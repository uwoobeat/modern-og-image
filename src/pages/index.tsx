import Head from 'next/head';

export default function Page() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://modern-og-image.vercel.app';

  const ogImageUrl = new URL('/api/og', baseUrl);

  ogImageUrl.searchParams.set(
    'title',
    'Modern Open Graph Image Generator\nCreate stylish OG images in seconds',
  );
  ogImageUrl.searchParams.set('category', 'Development');
  ogImageUrl.searchParams.set('author', 'Jaehyun Ahn');
  ogImageUrl.searchParams.set('date', new Date().toLocaleDateString('en-US'));
  ogImageUrl.searchParams.set('blogUrl', 'modern-og-image.vercel.app');

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
        <meta property="og:image" content={ogImageUrl.toString()} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  );
}
