import styled from 'styled-components'
import { useRef } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

// Components
import { Image } from '../Layout/Image'

export default function Slider({ featuredImage, images }) {
  let currentPosition = 0
  const featuredImageRef = useRef(null)
  const sliderRef = useRef(null)

  const SlidePrevious = () => {
    const sliderItems = sliderRef.current.children
    if (sliderItems.length > 0) {
      if (currentPosition === 0) {
        // On first position
        currentPosition = sliderItems.length - 1 // Reset to last position
      } else {
        currentPosition -= 1
      }
      const previousItemImg = sliderItems[currentPosition].children[0]

      featuredImageRef.current.src = previousItemImg.src
    }
  }

  const SlideNext = () => {
    const sliderItems = sliderRef.current.children
    if (sliderItems.length > 0) {
      if (currentPosition === sliderItems.length - 1) {
        // On last position
        currentPosition = 0 // Reset to first position
      } else {
        currentPosition += 1
      }
      const nextItemImg = sliderItems[currentPosition].children[0]
      featuredImageRef.current.src = nextItemImg.src
    }
  }

  const SlideSet = (id) => {
    if (!id && id != 0) return
    const sliderItems = sliderRef.current.children
    const itemImg = sliderItems[id].children[0]
    featuredImageRef.current.src = itemImg.src
  }

  return (
    <StyledSlider>
      {featuredImage && (
        <FeaturedImageContainer>
          <FeaturedImage
            ref={featuredImageRef}
            src={`/img/works/${featuredImage.src}`}
            alt={featuredImage.alt || ''}
          />
          <SlideBtnContainer>
            <SlideBtn onClick={() => SlidePrevious()}>
              <BsArrowLeftSquareFill />
            </SlideBtn>
          </SlideBtnContainer>
          <SlideBtnContainer>
            <SlideBtn onClick={() => SlideNext()}>
              <BsArrowRightSquareFill />
            </SlideBtn>
          </SlideBtnContainer>
        </FeaturedImageContainer>
      )}
      {images && (
        <Images ref={sliderRef}>
          {featuredImage && (
            <StyledSliderImageBtn onClick={() => SlideSet(0)}>
              <StyledSliderImage
                src={`/img/works/${featuredImage.src}`}
                alt={featuredImage.alt || ''}
              />
            </StyledSliderImageBtn>
          )}
          {images.map((img, i) => (
            <StyledSliderImageBtn key={i} onClick={() => SlideSet(i + 1)}>
              <StyledSliderImage
                src={`/img/works/${img.src}` || ''}
                alt={img.alt || ''}
              />
            </StyledSliderImageBtn>
          ))}
        </Images>
      )}
    </StyledSlider>
  )
}

const StyledSliderImageBtn = styled.button.attrs((props) => ({
  ...props,
}))`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  width: 49%;
  height: 40vw;
  display: inline-block;
  margin: 2% 2% 0 0;

  :nth-of-type(2n) {
    margin-right: 0;
  }

  @media screen and (min-width: 500px) {
    width: 32%;
    height: 25vw;
    margin: 2% 2% 0 0;

    :nth-of-type(2n) {
      margin-right: 2%;
    }

    :nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 19%;
    height: 15vw;
    max-height: 200px;
    margin: 1.25% 1.25% 0 0;

    :nth-of-type(2n) {
      margin-right: 1.25%;
    }

    :nth-of-type(3n) {
      margin-right: 1.25%;
    }

    :nth-of-type(5n) {
      margin-right: 0;
    }
  }
`

const StyledSlider = styled.div`
  margin-top: 2rem;
`

const FeaturedImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vw;
  background-color: ${({ theme }) => theme.filledSecondary.bg};

  @media screen and (min-width: 700px) {
    height: 40vw;
  }

  @media screen and (min-width: 1000px) {
    height: 400px;
  }

  // & > div = SlideBtnContainer, & > div > button = SlideBtn
  & > div {
    @media screen and (min-width: 500px) {
      &::before {
        content: '';
        width: 200%;
        height: 100%;
        cursor: default;
        position: absolute;
        top: 0;

        @media screen and (min-width: 700px) {
          width: 500%;
        }
      }
    }

    &:hover > button {
      opacity: 1;
    }
  }

  & > div:first-of-type {
    &::before {
      left: 0;
    }
  }

  & > div:last-of-type {
    &::before {
      right: 0;
    }
  }
`

const SlideBtnContainer = styled.div`
  outline: none;
  border: none;
  width: 50px;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.3s, backdrop-filter 0.3s;
  position: absolute;
  top: 0;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }

  &:hover {
    transition-delay: 1s;
    background-color: ${({ theme }) => theme.filledSecondary.overlayBg};
    backdrop-filter: blur(2px);
  }
`

const SlideBtn = styled.button.attrs((props) => ({
  ...props,
}))`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: none;
  display: inline-block;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: ${({ theme }) => theme.filledSecondary.bg};
  border-radius: 50px; // Hide the background-color from borders
  color: #fff;
  vertical-align: middle;
  opacity: 0.5;
  transition: opacity 0.3s;

  &::before {
    content: '';
    width: 150%;
    height: 300%;
    position: absolute;
    top: -100%;
    left: -25%;
    opacity: 0.25;
  }

  & > * {
    display: block;
    width: 100%;
    height: 100%;
  }
`

const FeaturedImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  object-fit: contain;
`

const Images = styled.div``

const StyledSliderImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  padding: 1rem;
`
