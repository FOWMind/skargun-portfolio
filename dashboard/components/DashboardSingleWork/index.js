import styled from 'styled-components'

export default function DashboardSingleWork({
  id,
  title,
  category,
  slug,
  repo,
  featuredImage,
  images,
  videos,
  notes,
}) {
  const formatWorkText = (str) => str?.toString()

  const renderType = {
    default: 0,
    link: 1,
    list: 2,
    listOfImages: 3,
    listOfVideos: 4,
  }
  const RenderWorkItem = (name, item, type = renderType.default) => {
    if (!item) return
    let content

    if (type === renderType.default) {
      content = <FeaturedText>{formatWorkText(item)}</FeaturedText>
    }

    // Link render
    if (type === renderType.link) {
      content = (
        <FeaturedText>
          {item && (
            <WorkLink href={item} target="_blank">
              {formatWorkText(item)}
            </WorkLink>
          )}
        </FeaturedText>
      )
    }

    // Plain text list render
    if (type === renderType.list) {
      content = (
        <WorkUl>
          {item.map((listItem, i) => (
            <WorkUlItem key={listItem.id || i}>{listItem}</WorkUlItem>
          ))}
        </WorkUl>
      )
    }

    // Images list render
    if (type === renderType.listOfImages) {
      content = (
        <WorkUl>
          {item.map((img, i) => (
            <WorkUlItem key={img.id || i}>
              <WorkLink href={img} target="_blank" title={img}>
                {img}
              </WorkLink>
            </WorkUlItem>
          ))}
        </WorkUl>
      )
    }

    // Videos list render
    if (type === renderType.listOfVideos) {
      content = (
        <>
          {item.map((video, i) => (
            <WorkUl key={video.id || i}>
              {video.platform ? (
                <WorkUlItem>
                  {video.platform === 'youtube' && (
                    <WorkLink
                      href={`https://youtu.be/${video.videoId}`}
                      target="_blank"
                    >{`https://youtu.be/${video.videoId}`}</WorkLink>
                  )}
                  {video.platform === 'vimeo' && (
                    <WorkLink
                      href={`https://player.vimeo.com/video/${video.videoId}`}
                      target="_blank"
                    >{`https://player.vimeo.com/video/${video.videoId}`}</WorkLink>
                  )}
                </WorkUlItem>
              ) : (
                <WorkUlItem>
                  <WorkLink href={video.url} target="_blank">
                    {video.url}
                  </WorkLink>
                </WorkUlItem>
              )}
            </WorkUl>
          ))}
        </>
      )
    }

    return (
      <WorkText>
        <NormalText>{name}: </NormalText>
        {content}
      </WorkText>
    )
  }

  return (
    <WorkContainer>
      {featuredImage && <WorkImage src={featuredImage} alt="" />}
      {RenderWorkItem('ID', id)}
      {RenderWorkItem('Título', title)}
      {RenderWorkItem('Categoría', category)}
      {RenderWorkItem('Slug/URL', slug)}
      {RenderWorkItem('Repositorio', repo?.url, renderType.link)}
      {RenderWorkItem('Demo', repo?.demoUrl, renderType.link)}
      {RenderWorkItem('Imagen destacada', featuredImage, renderType.link)}
      {RenderWorkItem('Imágenes', images, renderType.listOfImages)}
      {RenderWorkItem('Videos', videos, renderType.listOfVideos)}
      {RenderWorkItem('Notas', notes, renderType.list)}
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f2f2f2;

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    width: 49%;
    margin-right: 2%;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1359px) {
    width: 32%;
    margin-right: 2%;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1360px) {
    width: 24%;
    margin-right: 1.33%;

    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
`

const WorkImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`

const WorkText = styled.div`
  font-size: 1rem;
  display: block;
  margin-bottom: 0.25rem;
  overflow: auto;
`

const WorkLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #87c754;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`

const NormalText = styled.span`
  font-weight: 500;
`

const FeaturedText = styled.strong`
  font-weight: 700;
  color: #87c754;
`

const WorkUl = styled.ul`
  margin-bottom: 0.25rem;
  list-style-type: none;
`

const WorkUlItem = styled.li`
  display: block;
  max-width: 100%;
  margin-bottom: 0.25rem;
  position: relative;
`
