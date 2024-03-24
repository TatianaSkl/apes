import { useEffect } from 'react';
import { Footer, NavigationMenu } from 'components';
import {
  ButtonClose,
  LinkSoc,
  Logo,
  Wrapper,
  WrapperFlex,
  WrapperLink,
  WrapperSoc,
} from './BurgerMenu.styled';
import icon from 'images/sprite.svg';

export const BurgerMenu = ({ onClose }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onClose]);

  return (
    <Wrapper
      role="dialog"
      aria-labelledby="burger-menu-heading"
      aria-describedby="burger-menu-description"
    >
      <WrapperFlex>
        <Logo href="/" aria-label="Link to home page">
          <svg>
            <use href={icon + '#icon-logo'}></use>
          </svg>
        </Logo>
        <ButtonClose type="button" aria-label="Button close menu" onClick={onClose}>
          CLOSE
        </ButtonClose>
      </WrapperFlex>
      <WrapperSoc aria-label="Social links">
        <WrapperLink>
          <LinkSoc
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Discord"
          >
            <svg>
              <use href={icon + '#icon-discord'}></use>
            </svg>
          </LinkSoc>
        </WrapperLink>
        <WrapperLink>
          <LinkSoc
            href="https://www.ravensbay.co.uk/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Ravensbay"
          >
            <svg>
              <use href={icon + '#icon-boat'}></use>
            </svg>
          </LinkSoc>
        </WrapperLink>
        <WrapperLink>
          <LinkSoc
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Twitter"
          >
            <svg>
              <use href={icon + '#icon-x'}></use>
            </svg>
          </LinkSoc>
        </WrapperLink>
      </WrapperSoc>
      <NavigationMenu onClose={onClose} />
      <Footer />
    </Wrapper>
  );
};
