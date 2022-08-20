import styled from '@emotion/styled';
import Button from '@components/Button';
import { ArrowRight } from '@components/Icon';
import { memo } from 'react';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import getAvatarUrl from '@utils/getAvatarUrl';
import { Logo, Title, Box, BottomContainer } from './components';

const Description = styled.div`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 12px;
`;

const Wallet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 16px;

  width: 560px;
  height: 108px;

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const WalletName = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const WalletAddress = styled.span`
  font-size: 16px;
  line-height: 19px;
  opacity: 0.5;
`;

const Avatar = styled.img`
  height: 60px;
`;

const OtherWallet = styled.div`
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

export interface FirstStepProps {
  onSubmit: () => void;
}

const FirstStep = ({ onSubmit }: FirstStepProps) => {
  const { address } = useAuthenticatedAuth();
  return (
    <Box>
      <Logo />
      <Title>
        Howdy! 👋
        <br />
        Welcome to Parrots
      </Title>
      <Description>Connected Wallet</Description>
      <Wallet>
        <Avatar src={getAvatarUrl(address)} />
        <WalletInfo>
          <WalletName>Keplr Wallet</WalletName>
          <WalletAddress>{address}</WalletAddress>
        </WalletInfo>
      </Wallet>
      <BottomContainer>
        <OtherWallet>Other wallet?</OtherWallet>
        <Button rightIcon={<ArrowRight />} onClick={onSubmit}>
          Let&apos;s Start!
        </Button>
      </BottomContainer>
    </Box>
  );
};

export default memo(FirstStep);
