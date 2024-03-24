import { toast } from 'react-toastify';
import { Container, Section, TitleSection } from 'components';
import { IoCloseSharp } from 'react-icons/io5';
import {
  ButonForm,
  ErrorMessage,
  Form,
  InputAddress,
  InputDiscord,
  Label,
  TextContactUs,
  Wrap,
  WrapIcon,
} from './ContactUs.styled';
import icon from 'images/sprite.svg';
import { useState } from 'react';

export const ContactUs = () => {
  const [discordError, setDiscordError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const isValidDiscord = validateDiscord(e.target.discord.value);
    const isValidAddress = validateAddress(e.target.address.value);
    setFormSubmitted(true);

    setDiscordError(!isValidDiscord);
    setAddressError(!isValidAddress);

    if (!isValidDiscord || !isValidAddress) {
      return;
    }

    toast.success('Data sent successfully!');
    e.target.reset();
  };

  const validateDiscord = discord => {
    return /^@[\w\d]+$/.test(discord);
  };

  const validateAddress = address => {
    return /^[a-zA-Z0-9]+$/g.test(address);
  };

  return (
    <Container>
      <Section id="mint" role="region" aria-label="Mint section">
        <TitleSection text="Are you in?" />
        <WrapIcon>
          <IoCloseSharp />
        </WrapIcon>
        <TextContactUs>
          Join the YACHT APE community to be one of the first to receive our limited edition NFT
        </TextContactUs>
        <Form onSubmit={handleSubmit}>
          <Wrap>
            <Label>
              <svg>
                <use href={icon + '#icon-discord-blue'}></use>
              </svg>
            </Label>
            <InputDiscord
              type="text"
              name="discord"
              title="Please enter a valid @username"
              placeholder="@username"
              required
              error={discordError}
              filled={formSubmitted}
              aria-describedby={discordError ? 'discord-error' : null}
            />
            {discordError && <ErrorMessage id="discord-error">Wrong discord</ErrorMessage>}
          </Wrap>
          <Wrap>
            <Label>
              <svg>
                <use href={icon + '#icon-MetaMask'}></use>
              </svg>
            </Label>
            <InputAddress
              type="text"
              name="address"
              title="Please enter a valid address"
              placeholder="Wallet address"
              required
              error={addressError}
              filled={formSubmitted}
              aria-describedby={addressError ? 'address-error' : null}
            />
            {addressError && <ErrorMessage id="address-error">Wrong ADDRESS</ErrorMessage>}
          </Wrap>
          <ButonForm type="submit" aria-label="Submit form">
            {formSubmitted ? (discordError || addressError ? 'ERROR' : 'MINTED') : 'MINT'}
          </ButonForm>
        </Form>
      </Section>
    </Container>
  );
};
