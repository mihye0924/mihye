
import '@/styles/scss/index.scss'
import Head from 'next/head';  
import { prefix } from '@/config/config'
import { PortFolioProvider } from '@/context/context'

export default function App({ Component, pageProps }) { 
     
  return (  
    <>
    <PortFolioProvider value={{ prefix }}>
      <Head>
        <title>조미혜 | 웹 포트폴리오</title>
        <meta name="description" content="GoldenDiscAwards" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
        <link rel="icon" type="image/png" href="favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </PortFolioProvider>
    </>   
  )
}
