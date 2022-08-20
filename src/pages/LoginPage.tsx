import styled from '@emotion/styled';
import { boxStyles, maskedText, focusTextStyles } from '@styles';
import LogoSymbol from '@assets/images/logo_symbol.svg';
import Button from '@components/Button';
import { Keplr } from '@components/Icon';
import { useNavigate } from 'react-router-dom';
import PageAnimation from '@components/layouts/PageAnimation';

const Container = styled(PageAnimation)`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 74px;
`;

const Box = styled.div`
  ${boxStyles};
  padding: 54px 72px;
  width: 1090px;
  margin-top: 190px;
`;

const Title = styled.div`
  ${focusTextStyles};
  font-weight: 800;
  font-size: 64px;
  line-height: 79px;
  margin: 24px 0;
`;

const HighlightText = styled.span`
  position: relative;
  ${maskedText};
`;

const HighlightTextContainer = styled.span`
  position: relative;
`;

const GlowText = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.3;
  filter: blur(10px);
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 24px;
`;

const ConnectButton = styled(Button)`
  margin-top: 102px;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <Logo src={LogoSymbol} />
        <Title>
          Bring Musical Inspiration
          <br />
          To{' '}
          <HighlightTextContainer>
            <HighlightText>Everyone</HighlightText>
            <GlowText>Everyone</GlowText>
          </HighlightTextContainer>
        </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <ConnectButton leftIcon={<Keplr />} onClick={() => navigate('signup')}>
          Connect Wallet
        </ConnectButton>
      </Box>
    </Container>
  );
};

export default LoginPage;
