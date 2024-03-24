import { Container, Section, TitleSection } from 'components';
import { useState } from 'react';
import { ItemFAQ, ListFAQ, Picture, TextFAQ, TitleFAQ, WrapText } from './FAQ.styled';
import img from 'images/img';
const { mask_1, mask_2, mask_3, mask_4 } = img;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleVisibility = index => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <Container>
      <Section id="faq" role="region" aria-label="FAQ section">
        <TitleSection text="FAQ" />
        <ListFAQ>
          <ItemFAQ isOpen={openIndex === 0}>
            <WrapText>
              <TitleFAQ
                onClick={() => toggleVisibility(0)}
                aria-expanded={openIndex === 0}
                aria-controls="faq-1"
              >
                WHAT IS AN NFT COLLECTION?
              </TitleFAQ>
              {openIndex === 0 && (
                <>
                  <TextFAQ id="faq-1">
                    An NFT collection is a group of unique digital assets, each represented by a
                    non-fungible token, typically created around a specific theme or style.
                  </TextFAQ>
                  <Picture src={`${mask_1}`} alt="Рicture monkey" />
                </>
              )}
            </WrapText>
          </ItemFAQ>
          <ItemFAQ isOpen={openIndex === 1}>
            <WrapText>
              <TitleFAQ
                onClick={() => toggleVisibility(1)}
                aria-expanded={openIndex === 1}
                aria-controls="faq-2"
              >
                HOW DO I PURCHASE NFTS FROM A COLLECTION?
              </TitleFAQ>
              {openIndex === 1 && (
                <>
                  <TextFAQ id="faq-2">
                    To purchase nfts from a collection, you typically need to use cryptocurrency on
                    a blockchain0based marketplace.
                  </TextFAQ>
                  <Picture src={`${mask_2}`} alt="Рicture monkey" />
                </>
              )}
            </WrapText>
          </ItemFAQ>
          <ItemFAQ isOpen={openIndex === 2}>
            <WrapText>
              <TitleFAQ
                onClick={() => toggleVisibility(2)}
                aria-expanded={openIndex === 2}
                aria-controls="faq-3"
              >
                CAN I SELL OR TRADE NFTS FROM A COLLECTION?
              </TitleFAQ>
              {openIndex === 2 && (
                <>
                  <TextFAQ id="faq-3">
                    Yes, you can sell or trade NFTs from a collection like you would other digital
                    assets.
                  </TextFAQ>
                  <Picture src={`${mask_3}`} alt="Рicture monkey" />
                </>
              )}
            </WrapText>
          </ItemFAQ>
          <ItemFAQ isOpen={openIndex === 3}>
            <WrapText>
              <TitleFAQ
                onClick={() => toggleVisibility(3)}
                aria-expanded={openIndex === 3}
                aria-controls="faq-4"
              >
                WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
              </TitleFAQ>
              {openIndex === 3 && (
                <>
                  <TextFAQ id="faq-4">
                    As an NFT owner, you can own, transfer, potentially access exclusive content,
                    resell, but don't automatically get copyright or intellectual property rights.
                  </TextFAQ>
                  <Picture src={`${mask_4}`} alt="Рicture monkey" />
                </>
              )}
            </WrapText>
          </ItemFAQ>
        </ListFAQ>
      </Section>
    </Container>
  );
};
