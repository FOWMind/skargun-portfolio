import styled from 'styled-components'
import { useState } from 'react'

// Components
import VideoIframe from '../Layout/VideoIframe'

export default function WorkVideo({ video }) {
  const initialCharLimit = 200
  const [charLimit, setCharLimit] = useState(initialCharLimit)
  const [showLess, setShowLess] = useState(false)
  return (
    <StyledWorkVideo>
      {video.platform?.toLowerCase() === 'youtube' && (
        <VideoIframe
          url={`https://www.youtube-nocookie.com/embed/${video.url}`}
          title="YouTube video player"
          style={styles.videoIframe}
        />
      )}
      {video.platform?.toLowerCase() === 'vimeo' && (
        <VideoIframe url={`https://player.vimeo.com/video/${video.url}`} />
      )}
      {!video.platform && (
        <VideoIframe url={video.url} style={styles.videoIframe} />
      )}
      {video.desc && (
        <StyledWorkVideoDesc>
          <span>
            {video.desc.length > initialCharLimit && (
              <>
                {video.desc.slice(0, charLimit)}
                {!showLess && (
                  <>
                    ...
                    <ChangeCharLimitBtn
                      onClick={() => {
                        setShowLess(true)
                        setCharLimit(video.desc.length)
                      }}
                    >
                      Mostrar más
                    </ChangeCharLimitBtn>
                  </>
                )}
                {showLess && (
                  <ChangeCharLimitBtn
                    onClick={() => {
                      setShowLess(false)
                      setCharLimit(initialCharLimit)
                    }}
                  >
                    Mostrar menos
                  </ChangeCharLimitBtn>
                )}
              </>
            )}
            {video.desc.length <= initialCharLimit && video.desc}
          </span>
        </StyledWorkVideoDesc>
      )}
    </StyledWorkVideo>
  )
}

const styles = {
  videoIframe: {
    width: '100%',
    maxHeight: '300px',
  },
}

const StyledWorkVideo = styled.div`
  margin-bottom: 2rem;

  iframe {
    height: 50vw;
  }

  @media screen and (min-width: 700px) {
    width: 48%;
    margin-bottom: 2rem;
    margin-right: 4%;

    &:nth-of-type(2n) {
      margin-right: 0;
    }

    iframe {
      height: 30vw;
    }
  }
`

const StyledWorkVideoDesc = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Montserrat', 'Koulen', sans-serif;
`

const ChangeCharLimitBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  display: block;
  padding: 0.25rem 0;
  background: none;
  color: inherit;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
