import styled from '@emotion/styled';
import { memo } from 'react';
import getAvatarUrl from '@utils/getAvatarUrl';
import BeakCard from '@components/BeakCard';
import { formatDistanceToNow } from 'date-fns';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
`;

const CreatedAt = styled.span`
  opacity: 0.5;
`;

export interface FeedItemProps {
  address: string;
  url: string;
  respectCount: number;
  title: string;
  author: string;
  createdAt: Date;
}

const FeedItem = ({
  address,
  title,
  author,
  url,
  respectCount,
  createdAt,
}: FeedItemProps) => {
  const formattedCreatedAt = formatDistanceToNow(createdAt);

  return (
    <Container>
      <Avatar src={getAvatarUrl(address)} />
      <InnerContainer>
        <Info>
          <span>
            <b>beomjun.gil</b> uploaded new beak
          </span>
          <CreatedAt>
            {formattedCreatedAt.includes('less')
              ? 'Just now'
              : `${formattedCreatedAt} ago`}
          </CreatedAt>
        </Info>
        <BeakCard
          title={title}
          author={author}
          variant="feed"
          url={url}
          respectCount={respectCount}
        />
      </InnerContainer>
    </Container>
  );
};

export default memo(FeedItem);
