import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag') || 'react';

  try {
    const res = await fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(tag)}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'DevPulse-App'
      }
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch external news' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}