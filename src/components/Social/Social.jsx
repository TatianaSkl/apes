import icon from 'images/sprite.svg';
import { LinkSoc, WrapperLink, WrapperSoc } from './Social.styled';

export const Social = () => {
  return (
    <WrapperSoc>
      <WrapperLink>
        <LinkSoc
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Visit Discord"
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
          aria-label="Visit Ravensbay"
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
          aria-label="Visit Twitter"
        >
          <svg>
            <use href={icon + '#icon-x'}></use>
          </svg>
        </LinkSoc>
      </WrapperLink>
    </WrapperSoc>
  );
};
