import Head from 'next/head'
import { useEffect, useState } from 'react'

// Utils
import { API, LOAD_STATES } from '../utils/constants'

// Components
import AppLayout from '../components/AppLayout'
import Header from '../components/Header'
import WorkList from '../components/WorkList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ works }) {
  const [loadState, setLoadState] = useState(LOAD_STATES.IN_PROGRESS)
  useEffect(() => {
    if (works) setLoadState(LOAD_STATES.FINISHED)
  }, [works, loadState, setLoadState])
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
          <WorkList works={works} loadState={loadState} />
          <Contact />
        </main>
      </AppLayout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API.URL}/${API.ENDPOINTS.VIEW_WORKS}`)
  const data = await res.json()
  return {
    props: {
      works: data,
    },
  }
}
