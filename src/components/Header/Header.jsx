import { useState } from 'react';
import { BurgerMenu, Container, NavigationMenu } from 'components';
import {
  ButonHeader,
  HeaderStyled,
  Logo,
  MenuContainer,
  TextHeader,
  WrappeMobil,
  WrappeTablet,
} from './Header.styled';
import icon from 'images/sprite.svg';

export const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalState(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalState(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <HeaderStyled role="banner">
        <Logo href="/" aria-label="Link to home page">
          <svg>
            <use href={icon + '#icon-logo'}></use>
          </svg>
        </Logo>
        <TextHeader>diD yOu seE iT ?</TextHeader>
        <WrappeMobil>
          <ButonHeader type="button" aria-label="Button open menu" onClick={onOpenModal}>
            MENU
          </ButonHeader>
        </WrappeMobil>
        <WrappeTablet>
          <MenuContainer className={isVisible ? 'visible' : ''} aria-expanded={isVisible}>
            <NavigationMenu id="menu" />
          </MenuContainer>
          <ButonHeader
            onClick={toggleVisibility}
            isVisible={isVisible}
            aria-expanded={isVisible}
            aria-controls="menu"
            aria-label={isVisible ? 'Close menu' : 'Open menu'}
            aria-labelledby="menu"
          >
            {isVisible ? 'CLOSE' : 'MENU'}
          </ButonHeader>
        </WrappeTablet>
      </HeaderStyled>
      {modalState && <BurgerMenu onClose={onCloseModal} />}
    </Container>
  );
};
