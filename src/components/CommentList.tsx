import styled from '@emotion/styled';
import { memo } from 'react';
import CommentListItem from '@components/CommentListItem';
import getAvatarUrl from '@utils/getAvatarUrl';
import { boxStyles, focusTextStyles } from '@styles';

const Container = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 14px;
`;

const InputControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const Input = styled.input`
  ${boxStyles};
  font-family: 'Inter', sans-serif;
  padding: 20px 24px;
  font-size: 16px;
  line-height: 19px;
  outline: none;

  font-style: italic;
  ::placeholder {
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  padding: 11px 23px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 63px;

  margin-left: auto;
  outline: none;
  color: #000000;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  ${focusTextStyles};
  cursor: pointer;
`;

const CommentCount = styled.span`
  opacity: 0.5;
`;

export interface CommentListProps {
  comments: any[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <Container>
      <Head>
        <Title>
          Comments <CommentCount>{comments.length}</CommentCount>
        </Title>
        <InputBox>
          <Avatar src={getAvatarUrl('asdasd')} />
          <InputControlContainer>
            <Input placeholder="Leave comment as ‘beomjun.gil’..." />
            <SubmitButton>Submit</SubmitButton>
          </InputControlContainer>
        </InputBox>
      </Head>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};

export default memo(CommentList);
