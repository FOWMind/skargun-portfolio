import styled from 'styled-components'
import Link from 'next/link'

// Components
import { Image } from '../Layout/Image'

// Utils
import { removeHttp, replaceSlug } from '../../utils'

export default function WorkItem({ work }) {
  return (
    <StyledWorkItem>
      <Link href={`/work/${work.slug}`}>
        <a>
          {work.featuredImage && (
            <StyledWorkItemImage
              src={`${work.featuredImage}`}
              alt={work.featuredImage}
              noBorder
            />
          )}
        </a>
      </Link>

      <StyledWorkItemInfo>
        <Link href={`/work/${work.slug}`}>
          <a>
            <StyledWorkItemInfoTitle title={work.title || 'Sin nombre'}>
              {work.title || 'Sin nombre'}
            </StyledWorkItemInfoTitle>
          </a>
        </Link>
        <div>
          {work.category && (
            <StyledWorkItemInfoText>
              Categoria: {work.category}
            </StyledWorkItemInfoText>
          )}
          {work.repository && (
            <>
              {work.repository?.url && (
                <StyledWorkItemInfoText title="Ir al repositorio">
                  Repositorio:
                  <StyledWorkItemInfoLink
                    href={encodeURI(work.repository.url)}
                    target="_blank"
                  >
                    {removeHttp(work.repository.url)}
                  </StyledWorkItemInfoLink>
                </StyledWorkItemInfoText>
              )}

              {work.repository?.demoUrl && (
                <StyledWorkItemInfoText title="Ver la DEMO">
                  Demo:
                  <StyledWorkItemInfoLink
                    href={encodeURI(work.repository.demoUrl)}
                    target="_blank"
                  >
                    {removeHttp(work.repository.demoUrl)}
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
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:hover {
    img {
      transform: scale(1.1);
      transition-duration: 1s;
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

const StyledWorkItemImage = styled(Image)`
  object-fit: cover;
  transition: transform ease-in-out 0.3s;
`

const StyledWorkItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.filledPrimary.overlayBg};
  backdrop-filter: blur(5px);
  padding: 1rem;
  text-transform: uppercase;
  color: #fff;
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
  color: ${({ theme }) => theme.filledPrimary.overlayClr};
`
