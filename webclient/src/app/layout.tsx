'use client';
import { metadata } from 'data/metadata';
import 'styles/globals.css';

import { FontStyles, ResetStyles, GlobalStyles } from 'styles/GlobalStyles';
import { ColorStyles } from 'styles/variable';
import { LevelStyles } from 'styles/level';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>{metadata.title}</title>
      </head>
      <ResetStyles />
      <GlobalStyles />
      <ColorStyles />
      <LevelStyles />
      <body>
        <FontStyles />
        {children}
      </body>
    </html>
  );
}
