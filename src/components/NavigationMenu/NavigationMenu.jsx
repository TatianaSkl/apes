import { NaLink, NavWrap } from './NavigationMenu.styled';

export const NavigationMenu = ({ onClose }) => {
  return (
    <NavWrap role="navigation">
      <NaLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClose}
        aria-label="Navigate to About section"
      >
        ABOUT
      </NaLink>
      <NaLink
        to="mindMap"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClose}
        aria-label="Navigate to Mind Map section"
      >
        M-MAP
      </NaLink>
      <NaLink
        to="faq"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClose}
        aria-label="Navigate to FAQ section"
      >
        FAQ
      </NaLink>
      <NaLink
        to="arts"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClose}
        aria-label="Navigate to Arts section"
      >
        ARTS
      </NaLink>
      <NaLink
        to="mint"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClose}
        aria-label="Navigate to Mint section"
      >
        MINT
      </NaLink>
    </NavWrap>
  );
};
