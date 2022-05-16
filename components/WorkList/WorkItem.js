import styled from 'styled-components'
import Link from 'next/link'

// Components
import { StyledImage } from '../Layout/Image'

// Utils
import { removeHttp } from '../../utils'

export default function WorkItem({ work }) {
  return (
    <StyledWorkItem>
      <Link href={`/work/${work.id}`}>
        <a>
          {work.featuredImage && (
            <StyledWorkItemImage
              src={`/img/works/${work.featuredImage.src}`}
              alt={work.featuredImage.alt}
              noBorder
            />
          )}
        </a>
      </Link>

      <StyledWorkItemInfo>
        <Link href={`/work/${work.id}`}>
          <a>
            <StyledWorkItemInfoTitle title={work.title}>
              {work.title}
            </StyledWorkItemInfoTitle>
          </a>
        </Link>
        <div>
          {work.category && (
            <StyledWorkItemInfoText>
              Categoria: {work.category}
            </StyledWorkItemInfoText>
          )}
          {work.repo && (
            <>
              {work.repo?.url && (
                <StyledWorkItemInfoText title="Ir al repositorio">
                  Repositorio:
                  <StyledWorkItemInfoLink
                    href={encodeURI(work.repo?.url)}
                    target="_blank"
                  >
                    {removeHttp(work.repo?.url)}
                  </StyledWorkItemInfoLink>
                </StyledWorkItemInfoText>
              )}

              {work.repo?.demoUrl && (
                <StyledWorkItemInfoText title="Ver la DEMO">
                  Demo:
                  <StyledWorkItemInfoLink
                    href={encodeURI(work.repo.demoUrl)}
                    target="_blank"
                  >
                    {removeHttp(work.repo.demoUrl)}
                  </StyledWorkItemInfoLink>
                </StyledWorkItemInfoText>
              )}
            </>
          )}
        </div>
      </StyledWorkItemInfo>
    </StyledWorkItem>
  )
}

const StyledWorkItem = styled.div`
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0 10px 25px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:hover {
    img {
      transform: scale(1.1);
      transition-duration: 1s;
    }

    div {
      bottom: 0;
      transition-duration: 0.3s;
    }
  }

  @media screen and (min-width: 700px) {
    width: 48%;
    margin: 0 4% 4% 0;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 30%;
    margin: 0 5% 5% 0;

    &:nth-of-type(2n) {
      margin-right: 5%;
    }

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
`

const StyledWorkItemImage = styled(StyledImage)`
  object-fit: cover;
  transition: transform ease-in-out 0.3s;
`

const StyledWorkItemInfo = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  z-index: 5;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  padding: 0 1rem;
  text-transform: uppercase;
  color: #fff;
  transition: bottom ease-in-out 0.5s;
`

const hideTextAtLimit = `
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledWorkItemInfoTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 400;
  ${hideTextAtLimit}
`

const StyledWorkItemInfoText = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  margin-right: 1rem;
  ${hideTextAtLimit}
`

const StyledWorkItemInfoLink = styled.a.attrs((props) => ({
  ...props,
}))`
  text-decoration: underline;
  margin-left: 0.25rem;
  color: #59eb9d;
`
