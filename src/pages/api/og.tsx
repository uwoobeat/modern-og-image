// pages/api/og.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { pretendard } from '@/styles/fonts';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Required parameters
    const title = decodeURIComponent(searchParams.get('title') || '');
    const category = decodeURIComponent(searchParams.get('category') || '');
    const author = decodeURIComponent(searchParams.get('author') || '');
    const date = decodeURIComponent(searchParams.get('date') || '');
    const blogUrl = decodeURIComponent(searchParams.get('blogUrl') || '');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: pretendard.style.fontFamily,
          }}
        >
          {/* Geometric Background Elements */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '600px',
              height: '600px',
              background:
                'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
              borderRadius: '100px',
              transform: 'rotate(15deg)',
            }}
          />

          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '400px',
              height: '400px',
              background:
                'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              borderRadius: '80px',
              transform: 'rotate(-20deg)',
            }}
          />

          {/* Main Content Container */}
          <div
            style={{
              display: 'flex',
              padding: '60px',
              width: '100%',
              height: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Top Section */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '9999px',
                      fontSize: '14px',
                      color: '#ffffff',
                      fontWeight: 500,
                    }}
                  >
                    {category}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {date}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    fontSize: '52px',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.2,
                    maxWidth: '800px',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {title}
                </div>
              </div>

              {/* Bottom Section */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '20px',
                    }}
                  >
                    {author.charAt(0)}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        color: '#ffffff',
                        fontWeight: 500,
                      }}
                    >
                      {author}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                      }}
                    >
                      Technical Blog
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                    }}
                  >
                    {blogUrl}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
