import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Section, TitleSection } from 'components';
import { ImArrowUpRight } from 'react-icons/im';
import {
  ButtonNext,
  ButtonPrev,
  Item,
  LinkMind,
  List,
  Navigation,
  TextMind,
  TitleMind,
  Wrap,
  WrapMobil,
  WrapTablet,
} from './MindMap.styled';
import data from '../../bd/data.json';

export const MindMap = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <Container>
      <Section id="mindMap" role="region" aria-label="MindMap section">
        <TitleSection text="MIND map" />
        <WrapMobil>
          <List>
            <Slider ref={sliderRef} {...settings} aria-disabled={!data.length}>
              {data.map(({ title, text, link }, index) => (
                <Item key={index} link={link}>
                  {link ? (
                    <Wrap>
                      <LinkMind href={link} target="_blank" rel="noopener noreferrer nofollow">
                        <ImArrowUpRight />
                      </LinkMind>
                      <TitleMind dangerouslySetInnerHTML={{ __html: title }} />
                    </Wrap>
                  ) : (
                    <Wrap>
                      <TextMind>{text}</TextMind>
                      <TitleMind>{title}</TitleMind>
                    </Wrap>
                  )}
                </Item>
              ))}
            </Slider>
          </List>
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
                sliderRef.current.innerSlider.state.currentSlide === data.length - 1
              }
            >
              Next
            </ButtonNext>
          </Navigation>
        </WrapMobil>
        <WrapTablet>
          <List>
            {data.map(({ title, text, link }, index) => (
              <Item key={index} link={link}>
                {link ? (
                  <>
                    <LinkMind href={link} target="_blank" rel="noopener noreferrer nofollow">
                      <ImArrowUpRight />
                    </LinkMind>
                    <TitleMind dangerouslySetInnerHTML={{ __html: title }} />
                  </>
                ) : (
                  <>
                    <TextMind>{text}</TextMind>
                    <TitleMind>{title}</TitleMind>
                  </>
                )}
              </Item>
            ))}
          </List>
        </WrapTablet>
      </Section>
    </Container>
  );
};
