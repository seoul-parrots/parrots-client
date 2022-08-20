import styled from '@emotion/styled';
import { memo } from 'react';
import getAvatarUrl from '@utils/getAvatarUrl';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px 12px 16px;
  gap: 8px;

  background: #282528;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.span`
  font-size: 14px;
  line-height: 17px;
`;

const AuthorName = styled.span`
  font-size: 12px;
  line-height: 15px;
  opacity: 0.5;
`;

export interface TinyBeakCardProps {
  address: string;
  name: string;
  authorName: string;
}

const TinyBeakCard = ({ address, name, authorName }: TinyBeakCardProps) => {
  return (
    <Container>
      <Avatar src={getAvatarUrl(address)} />
      <InnerContainer>
        <Name>{name}</Name>
        <AuthorName>{authorName}</AuthorName>
      </InnerContainer>
    </Container>
  );
};

export default memo(TinyBeakCard);
