"use client"

import React, { useState } from 'react';
import ShortenForm from './shorten-form';
import UrlList from './url-list';

export default function UrlShortenerContainer() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUrlShortened = () => {
    setRefreshKey((prev) => prev + 1); // Triggers UrlList re-render
  };

  return (
    <div>
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      <UrlList key={refreshKey} />
    </div>
  );
}
