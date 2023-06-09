import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from "./comps/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    
    <title>Auction Hub</title>
    <meta charSet='UTF-8' />
    <meta name="viewport" content='width=device-width, initial-scale=1.0' />

  </Head>

    <div className="header container">
      <Header />
    </div>
    
  
  <Component classname="container" {...pageProps} />
  </>
  )
}
