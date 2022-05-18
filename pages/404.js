import Head from 'next/head'

// Components
import AppLayout from '../components/AppLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error404 from '../components/ErrorLayout/Error404'

export default function FourOhFour() {
  return (
    <>
      <AppLayout>
        <Head>
          <title>Página no encontrada - Skargun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Error404 />
      </AppLayout>
      <Footer />
    </>
  )
}
