import type { ReactNode } from 'react';
import './globals.css';
import ThemeProvider from '../shared/theme/ThemeProvider';
import Nav from '../shared/Nav';

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
