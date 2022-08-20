import styled from '@emotion/styled';
import { boxStyles, focusTextStyles } from '@styles';
import { memo } from 'react';
import LogoSymbol from '@assets/images/logo_symbol.svg';

export const Box = styled.div`
  ${boxStyles};
  padding: 60px 40px 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Logo = memo(() => <StyledLogo src={LogoSymbol} />);

export const Title = styled.div`
  ${focusTextStyles};
  font-weight: 700;
  font-size: 50px;
  line-height: 62px;
  margin: 16px 0 72px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
`;
