import Head from 'next/head'

// Components
import AppLayout from '../components/AppLayout'
import Header from '../components/Header'
import WorkList from '../components/WorkList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <AppLayout>
        <Head>
          <title>Skargun - Home</title>
          <meta name="description" content="Skargun Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header home />
        <main>
          <WorkList />
          <Contact />
        </main>
      </AppLayout>
      <Footer />
    </>
  )
}
