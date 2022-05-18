import styled from 'styled-components'

// Components
import Title from '../Layout/Title'
import WorkVideo from './WorkVideo'

export default function Videos({ videos }) {
  return (
    <>
      <Title>Videos</Title>
      <VideosContainer>
        {videos.map((video, i) => (
          <WorkVideo key={i} video={video} />
        ))}
      </VideosContainer>
    </>
  )
}

const VideosContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`
