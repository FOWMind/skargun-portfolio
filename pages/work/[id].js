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
import Videos from '../../components/SingleWork/Videos'
import Notes from '../../components/SingleWork/Notes'
import Footer from '../../components/Footer'
import Loading from '../../components/Layout/Loading'
import Error404 from '../../components/ErrorLayout/Error404'

export default function SingleWork() {
  const [currentWork, setCurrentWork] = useState([])
  const { id } = useRouter().query
  const { title, repo, notes, featuredImage, images, videos } = currentWork
  const { data, loadState } = useFetch(`/api/work/${encodeURIComponent(id)}`)

  useEffect(() => {
    if (data) {
      setCurrentWork(data)
    }
  }, [data])

  return (
    <>
      <AppLayout>
        <Head>
          <title>{title ? `${title} - Skargun` : 'Trabajos - Skargun'}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        {loadState === 'inProgress' && <Loading />}
        {loadState === 'finished' && data && Object.entries(data).length > 0 && (
          <>
            <main>
              <Slider featuredImage={featuredImage} images={images} />
              <WorkInfo workTitle={title} workRepo={repo} />
              {videos && videos.length > 0 && <Videos videos={videos} />}
              {notes && <Notes notes={notes} />}
            </main>
          </>
        )}
        {loadState === 'finished' && data && Object.entries(data).length <= 0 && (
          <>
            <Error404 />
          </>
        )}
      </AppLayout>
      <Footer />
    </>
  )
}
