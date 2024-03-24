import { Link } from 'react-scroll';
import { Container, Social } from 'components';
import {
  ButonHero,
  FlexCenter,
  HeroSection,
  Picture,
  Text,
  TextBiro,
  TextHero,
  Title,
  TitleSecond,
  WrapMobil,
  WrapTablet,
} from './Hero.styled';
import img from 'images/img';
const { monkey_d, monkey_t, monkey_m, monkey_d_2x, monkey_t_2x, monkey_m_2x } = img;

export const Hero = () => {
  return (
    <Container>
      <HeroSection aria-labelledby="hero-heading">
        <WrapMobil>
          <Title id="hero-heading">YACHT APES</Title>
          <TextHero>Apes aRe eveRywhere</TextHero>
          <Picture aria-label="Monkey Picture">
            <source
              type="image/png"
              media="(max-width: 767px)"
              srcSet={`${monkey_m} 1x, ${monkey_m_2x} 2x`}
            />
            <img src={`${monkey_m}`} alt="Рicture monkey" />
          </Picture>
          <FlexCenter>
            <Link to="mint" spy={true} smooth={true} duration={500}>
              <ButonHero type="button" aria-label="Button scroll to Mint section">
                MEET APES
              </ButonHero>
            </Link>
          </FlexCenter>
          <FlexCenter>
            <Text>
              Yacht Ape is a collection of unique digital apes that you can own in NFT format
            </Text>
          </FlexCenter>
        </WrapMobil>
        <WrapTablet>
          <div>
            <TextBiro>diD yOu seE iT ?</TextBiro>
            <Title id="hero-heading">YACHT</Title>
            <TextHero>Apes aRe eveRywhere</TextHero>
          </div>
          <Picture aria-label="Monkey Picture">
            <source
              type="image/webp"
              media="(max-width: 1279px)"
              srcSet={`${monkey_t} 1x, ${monkey_t_2x} 2x`}
            />
            <source
              type="image/webp"
              media="(min-width: 1280px)"
              srcSet={`${monkey_d} 1x, ${monkey_d_2x} 2x`}
            />
            <img src={`${monkey_d}`} alt="Рicture monkey" />
          </Picture>
          <div>
            <TitleSecond id="hero-heading">APES</TitleSecond>
            <Text>
              Yacht Ape is a collection of unique digital apes that you can own in NFT format
            </Text>
            <Link to="mint" spy={true} smooth={true} duration={500}>
              <ButonHero type="button" aria-label="Button scroll to Mint section">
                MEET APES
              </ButonHero>
            </Link>
          </div>
        </WrapTablet>
        <Social />
      </HeroSection>
    </Container>
  );
};
