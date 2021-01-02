import '../styles/globals.css';
import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ManagedUIContext, Head } from '../imports';

const Noop: FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  );
};

export default MyApp;
