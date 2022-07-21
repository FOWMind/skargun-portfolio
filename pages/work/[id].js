import Head from 'next/head'
import { useEffect, useState } from 'react'

// Utils
import { API, LOAD_STATES } from '../../utils/constants'

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

export default function SingleWork({ work }) {
  const [currentWork, setCurrentWork] = useState([])
  const [loadState, setLoadState] = useState(LOAD_STATES.IN_PROGRESS)
  const { title, repository, notes, featuredImage, images, videos } =
    currentWork

  useEffect(() => {
    if (work) {
      setCurrentWork(work)
      setLoadState(LOAD_STATES.FINISHED)
    }
  }, [work])

  return (
    <>
      <AppLayout>
        <Head>
          <title>{title ? `${title} - Skargun` : 'Trabajos - Skargun'}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        {loadState === LOAD_STATES.IN_PROGRESS && <Loading />}
        {loadState === LOAD_STATES.FINISHED &&
          work &&
          Object.entries(work).length > 0 && (
            <>
              <main>
                <Slider featuredImage={featuredImage} images={images} />
                <WorkInfo workTitle={title} workRepository={repository} />
                {videos && videos.length > 0 && <Videos videos={videos} />}
                {notes && <Notes notes={notes} />}
              </main>
            </>
          )}
        {loadState === LOAD_STATES.FINISHED &&
          work &&
          Object.entries(work).length <= 0 && (
            <>
              <Error404 />
            </>
          )}
      </AppLayout>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`${API.URL}/${API.ENDPOINTS.VIEW_SINGLE_WORK}/${id}`)
  const data = await res.json()

  return {
    props: {
      work: data,
    },
  }
}
