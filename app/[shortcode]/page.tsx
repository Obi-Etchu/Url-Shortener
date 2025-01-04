import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react';

interface RedirectPageProps {
  params: { shortcode: string };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = params;

  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  });

  if (!url) {
    // Returning a 404 page in a server component
    return <div>404 - URL not found</div>;
  }

  await prisma.url.update({
    where: {
      id: url.id,
    },
    data: { visits: { increment: 1 } },
  });

  // Use the correct `redirect` function from `next/navigation`
  redirect(url.originalUrl);
}
