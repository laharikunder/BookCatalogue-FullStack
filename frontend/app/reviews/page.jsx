'use client';

import dynamic from 'next/dynamic';

const ReviewsPage = dynamic(() => import('./ReviewsClient'), {
  ssr: false,
});

export default function Page() {
  return <ReviewsPage />;
}
