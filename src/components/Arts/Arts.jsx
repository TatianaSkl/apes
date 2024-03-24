import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Section, TitleSection } from 'components';
import { ButtonNext, ButtonPrev, Navigation } from 'components/MindMap/MindMap.styled';
import img from 'images/img';
import { Image, WrapImage } from './Arts.styled';
const {
  slider_1,
  slider_2,
  slider_3,
  slider_4,
  slider_5,
  slider_6,
  slider_7,
  slider_8,
  slider_9,
  slider_10,
  slider_11,
  slider_12,
  slider_13,
  slider_14,
} = img;

const images = [
  slider_1,
  slider_2,
  slider_3,
  slider_4,
  slider_5,
  slider_6,
  slider_7,
  slider_8,
  slider_9,
  slider_10,
  slider_11,
  slider_12,
  slider_13,
  slider_14,
];

export const Arts = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Section id="arts" role="region" aria-label="Art collection">
        <TitleSection text="COLLECTION" />
        <Slider ref={sliderRef} {...settings} aria-disabled={!images.length}>
          {images.map((image, index) => (
            <WrapImage key={index}>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </WrapImage>
          ))}
        </Slider>
        <Navigation>
          <ButtonPrev
            type="button"
            aria-label="Button prev slide"
            onClick={handlePrev}
            aria-disabled={
              !sliderRef.current || sliderRef.current.innerSlider.state.currentSlide === 0
            }
          >
            Prev
          </ButtonPrev>
          <ButtonNext
            type="button"
            aria-label="Button next slide"
            onClick={handleNext}
            aria-disabled={
              !sliderRef.current ||
              sliderRef.current.innerSlider.state.currentSlide === images.length - 1
            }
          >
            Next
          </ButtonNext>
        </Navigation>
      </Section>
    </Container>
  );
};
