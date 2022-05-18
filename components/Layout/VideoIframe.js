import styled from 'styled-components'

export default function VideoIframe({ url = '', ...props }) {
  return (
    <StyledIframe
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    ></StyledIframe>
  )
}

const StyledIframe = styled.iframe.attrs((props) => ({
  ...props,
}))`
  display: block;
  margin-bottom: 0.5rem;
`
