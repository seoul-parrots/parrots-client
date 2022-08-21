import styled from '@emotion/styled';
import { memo, useCallback } from 'react';
import CommentListItem from '@components/CommentListItem';
import getAvatarUrl from '@utils/getAvatarUrl';
import { boxStyles } from '@styles';
import RoundButton from '@components/RoundButton';
import { ParrotsComment } from '@generated/rest';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import useInputProps from '@hooks/useInputProps';
import toast from 'react-hot-toast';

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
  color: #ffffff;

  font-style: italic;
  ::placeholder {
    opacity: 0.5;
  }
`;

const CommentCount = styled.span`
  opacity: 0.5;
`;

const SubmitButton = styled(RoundButton)`
  margin-left: auto;
`;

export interface CommentListProps {
  beakId: string;
  comments: ParrotsComment[];
  onSubmit: () => void;
}

const CommentList = ({ beakId, comments, onSubmit }: CommentListProps) => {
  const { profile, txClient, address } = useAuthenticatedAuth();
  const {
    value: commentValue,
    onChange: onChangeCommentValue,
    setValue: setCommentValue,
  } = useInputProps('');
  const handleSubmit = useCallback(
    () =>
      toast.promise(
        (async () => {
          const response = await txClient.signAndBroadcast([
            txClient.msgCreateComment({
              creator: address,
              username: profile.username!,
              displayName: profile.display_name!,
              comment: commentValue,
              beakId: Number(beakId),
            }),
          ]);
          if (response.code !== 0) {
            alert('Error occurred during comment');
            return;
          }
          setCommentValue('');
          onSubmit();
        })(),
        {
          loading: 'Commenting...',
          error: 'Error',
          success: 'Comment complete!',
        }
      ),
    [
      address,
      beakId,
      commentValue,
      onSubmit,
      profile.display_name,
      profile.username,
      setCommentValue,
      txClient,
    ]
  );

  return (
    <Container>
      <Head>
        <Title>
          Comments <CommentCount>{comments.length}</CommentCount>
        </Title>
        <InputBox>
          <Avatar src={getAvatarUrl(address)} />
          <InputControlContainer>
            <Input
              placeholder={`Leave comment as ‘${profile.username}’...`}
              value={commentValue}
              onChange={onChangeCommentValue}
            />
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
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
