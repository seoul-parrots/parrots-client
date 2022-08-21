import { memo } from 'react';
import styled from '@emotion/styled';
import { formatDistanceToNow } from 'date-fns';
import { boxStyles } from '@styles';
import getAvatarUrl from '@utils/getAvatarUrl';
import { ParrotsComment } from '@generated/rest';

const Container = styled.div`
  display: flex;
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
  margin-left: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DisplayName = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const CreatedAt = styled.span`
  font-size: 16px;
  line-height: 19px;
  opacity: 0.5;
`;

const Content = styled.div`
  ${boxStyles};
  padding: 20px 24px;
  font-size: 16px;
  line-height: 19px;
  ::before,
  ::after {
    content: '“';
    opacity: 0.5;
  }
`;

export interface CommentProps {
  comment: ParrotsComment;
}

const CommentListItem = ({ comment }: CommentProps) => {
  const formattedCreatedAt = formatDistanceToNow(
    new Date(Number(comment.created_at!))
  );

  return (
    <Container>
      <Avatar src={getAvatarUrl(comment.creator!)} />
      <InnerContainer>
        <InfoContainer>
          <DisplayName>{comment.display_name!}</DisplayName>
          <CreatedAt>
            {formattedCreatedAt.includes('less')
              ? 'Just now'
              : `${formattedCreatedAt} ago`}
          </CreatedAt>
        </InfoContainer>
        <Content>{comment.comment}</Content>
      </InnerContainer>
    </Container>
  );
};

export default memo(CommentListItem);
