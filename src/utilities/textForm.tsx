import React, { Suspense, useEffect, useState } from 'react';

export default function TruncatedText({ text, maxLength }) {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  return <span>{truncatedText}</span>;
}
