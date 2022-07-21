import Head from 'next/head'
import { useContext } from 'react'

// Contexts
import { DataContext } from '../contexts/DataContext'

// Components
import AppLayout from '../components/AppLayout'
import Header from '../components/Header'
import WorkList from '../components/WorkList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const {
    data: { works, worksLoadState },
  } = useContext(DataContext)
  return (
    <>
      <Head>
        <title>Skargun - Home</title>
        <meta name="description" content="Skargun Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Header home />
        <main>
          <WorkList works={works} loadState={worksLoadState} />
          <Contact />
        </main>
      </AppLayout>
      <Footer />
    </>
  )
}
