import './globals.css';
import '@mantine/core/styles.css';

import React from 'react';
import {ColorSchemeScript, mantineHtmlProps, MantineProvider} from '@mantine/core';
import {theme} from '../theme';
import {HeaderSimple} from '../components/HeaderSimple/HeaderSimple';

export const metadata = {
  title: 'Playground',
};

export default function RootLayout({children}: { children: any }) {
  return (
    <html lang={'en'} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel={'shortcut icon'} href={'/favicon.svg'} />
        <meta
          name={'viewport'}
          content={'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'}
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSimple />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
