import Head from 'next/head';

export default function Page() {
  const baseUrl = 'https://modern-og-image.vercel.app';

  const ogImageUrl = new URL('/api/og', baseUrl);

  ogImageUrl.searchParams.set(
    'title',
    encodeURIComponent(
      'Modern Open Graph Image Generator\nCreate stylish OG images in seconds',
    ),
  );
  ogImageUrl.searchParams.set('category', encodeURIComponent('Development'));
  ogImageUrl.searchParams.set('author', encodeURIComponent('Jaehyun Ahn'));
  ogImageUrl.searchParams.set(
    'date',
    encodeURIComponent(new Date().toLocaleDateString('en-US')),
  );
  ogImageUrl.searchParams.set(
    'blogUrl',
    encodeURIComponent('modern-og-image.vercel.app'),
  );

  return (
    <div>
      <Head>
        <title>Modern OG Image Generator</title>
        <meta
          name="description"
          content="A modern Open Graph image generator for your blog posts"
        />
        <meta property="og:type" content="website" />{' '}
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content="Modern Open Graph Image Generator" />
        <meta
          property="og:description"
          content="A modern Open Graph image generator for your blog posts"
        />
        <meta property="og:image" content={ogImageUrl.toString()} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Modern OG Image Generator" />
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  );
}
