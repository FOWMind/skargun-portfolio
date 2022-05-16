import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Hooks
import { useFetch } from '../../hooks'

// Components
import AppLayout from '../../components/AppLayout'
import Header from '../../components/Header'
import Slider from '../../components/SingleWork/Slider'
import WorkInfo from '../../components/SingleWork/WorkInfo'
import Notes from '../../components/SingleWork/Notes'
import Footer from '../../components/Footer'

export default function SingleWork() {
  const [currentWork, setCurrentWork] = useState([])
  const { id } = useRouter().query
  const { title, repo, notes, featuredImage, images } = currentWork
  const { data, isLoading } = useFetch(`/api/work/${id}`)

  // Data fetching
  useEffect(() => {
    if (data) {
      setCurrentWork(data)
    }
  }, [data])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <h1>PAGE NOT FOUND</h1>

  return (
    <>
      <AppLayout>
        <Head>
          <title>{title ? `${title} - Skargun` : 'Trabajos - Skargun'}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>
          <Slider featuredImage={featuredImage} images={images} />
          <WorkInfo workTitle={title} workRepo={repo} />
          {notes && <Notes notes={notes} />}
        </main>
      </AppLayout>
      <Footer />
    </>
  )
}
