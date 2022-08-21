import styled from '@emotion/styled';
import { memo } from 'react';
import getAvatarUrl from '@utils/getAvatarUrl';
import BeakCard from '@components/BeakCard';
import { formatDistanceToNow } from 'date-fns';
import { ParrotsBeak } from '@generated/rest';
import getFileUrl from '@utils/getFileUrl';

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
  beak: ParrotsBeak;
}

const FeedItem = ({ beak }: FeedItemProps) => {
  const formattedCreatedAt = formatDistanceToNow(new Date());

  return (
    <Container>
      <Avatar src={getAvatarUrl(beak.creator!)} />
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
          title={beak.name!}
          authorUsername={beak.creator_username!}
          variant="feed"
          url={getFileUrl(beak.file_index!)}
          respectCount={beak.respect_count!}
        />
      </InnerContainer>
    </Container>
  );
};

export default memo(FeedItem);
