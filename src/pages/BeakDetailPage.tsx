import PageLayout from '@components/layouts/PageLayout';
import BeakCard from '@components/BeakCard';
import RightBoxContainer from '@components/RightBoxContainer';
import RightBox from '@components/RightBox';
import RightBoxItem from '@components/RightBoxItem';
import styled from '@emotion/styled';
import Tag from '@components/Tag';
import getAvatarUrl from '@utils/getAvatarUrl';
import CommentList from '@components/CommentList';
import { Download, Respect } from '@components/Icon';
import { useCallback, useLayoutEffect, useState } from 'react';
import { ParrotsBeak, ParrotsComment, ParrotsProfile } from '@generated/rest';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import { useParams } from 'react-router-dom';
import getFileUrl from '@utils/getFileUrl';
import WrappedTinyBeakCard from '@components/WrappedTinyBeakCard';
import toast from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  gap: 70px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 27px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const AuthorInnerContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const AuthorSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorDisplayName = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const AuthorUsername = styled.span`
  font-size: 16px;
  line-height: 19px;
`;

const AuthorBio = styled.span`
  font-size: 16px;
  line-height: 27px;
`;

const DetailBox = styled(RightBox)`
  gap: 32px;
`;

const MarginedBeakCard = styled(BeakCard)`
  margin: 10px;
`;

const UsedBeakCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UsedBeakCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Name = styled.span`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;

  background: #1b191c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  cursor: pointer;
`;

const ActionText = styled.span`
  font-size: 18px;
  line-height: 22px;
`;

const BeakDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [beak, setBeak] = useState<ParrotsBeak>();
  const [comments, setComments] = useState<ParrotsComment[]>();
  const { address, queryClient, txClient } = useAuthenticatedAuth();
  const [authorProfile, setAuthorProfile] = useState<ParrotsProfile>();

  const loadComments = useCallback(async () => {
    const { data } = await queryClient.queryGetCommentsByBeakId({
      beakId: id,
    });
    setComments(data.comments);
  }, [id, queryClient]);

  const loadBeak = useCallback(async () => {
    if (!id) return;
    const { data } = await queryClient.queryGetBeakById({ id });
    setBeak(data.beak);
    loadComments();
  }, [id, queryClient, loadComments]);

  useLayoutEffect(() => {
    loadBeak();
  }, [loadBeak]);

  useLayoutEffect(() => {
    (async () => {
      if (!beak) return;
      const { data } = await queryClient.queryGetProfileByCreator({
        creator: beak.creator,
      });
      setAuthorProfile(data.profile);
    })();
  }, [beak, queryClient]);

  const handleClickRespect = useCallback(
    () =>
      toast.promise(
        (async () => {
          if (!beak) return;
          await txClient.signAndBroadcast([
            txClient.msgSendRespect({
              creator: address,
              beakId: Number(beak.id),
            }),
          ]);
          loadBeak();
        })(),
        {
          success: 'Respect complete!',
          loading: 'Showing respect...',
          error: 'Error',
        }
      ),
    [address, beak, loadBeak, txClient]
  );

  if (!beak) return <>Loading...</>;

  return (
    <PageLayout title={beak.name} isWide>
      <Container>
        <InnerContainer>
          <MarginedBeakCard
            variant="detail"
            url={getFileUrl(beak.file_index!)}
            respectCount={Number(beak.respect_count)}
          />
          <UsedBeakCardListContainer>
            <Name>Used Beaks</Name>
            <UsedBeakCardList>
              {beak.linked_beaks!.map((beakId) => (
                <WrappedTinyBeakCard key={beakId} beakId={beakId} />
              ))}
            </UsedBeakCardList>
          </UsedBeakCardListContainer>
          <CommentList
            beakId={beak.id!}
            comments={comments ?? []}
            onSubmit={loadComments}
          />
        </InnerContainer>
        <RightBoxContainer>
          <RightBox>
            <RightBoxItem title="Actions" isVertical>
              <Action
                onClick={() => window.open(getFileUrl(beak!.file_index!))}
              >
                <Download size={28} />
                <ActionText>Download</ActionText>
              </Action>
              <Action onClick={handleClickRespect}>
                <Respect size={28} />
                <ActionText>Show respect</ActionText>
              </Action>
            </RightBoxItem>
          </RightBox>
          <DetailBox>
            <RightBoxItem title="Description">
              <Description>
                I just played this guitar leap.
                <br />
                Plz show me the respect if you like this.
              </Description>
            </RightBoxItem>
            <RightBoxItem title="Description">
              {beak.tags!.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </RightBoxItem>
            <RightBoxItem title="License">
              <Tag>{beak.license}</Tag>
            </RightBoxItem>
            <AuthorInfo>
              <AuthorInnerContainer>
                <Avatar src={getAvatarUrl(beak.creator!)} />
                <AuthorSummary>
                  <AuthorDisplayName>
                    {beak.creator_display_name}
                  </AuthorDisplayName>
                  <AuthorUsername>@{beak.creator_username}</AuthorUsername>
                </AuthorSummary>
              </AuthorInnerContainer>
              <AuthorBio>{authorProfile?.description || '...'}</AuthorBio>
            </AuthorInfo>
          </DetailBox>
        </RightBoxContainer>
      </Container>
    </PageLayout>
  );
};

export default BeakDetailPage;
