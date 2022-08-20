import PageLayout from '@components/layouts/PageLayout';
import BeakCard from '@components/BeakCard';
import RightBoxContainer from '@components/RightBoxContainer';
import RightBox from '@components/RightBox';
import RightBoxItem from '@components/RightBoxItem';
import styled from '@emotion/styled';
import Tag from '@components/Tag';
import getAvatarUrl from '@utils/getAvatarUrl';
import SampleMp3 from '@assets/sample.mp3';
import CommentList from '@components/CommentList';

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

const AuthorMessage = styled.span`
  font-size: 16px;
  line-height: 27px;
`;

const DetailBox = styled(RightBox)`
  gap: 32px;
`;

const MarginedBeakCard = styled(BeakCard)`
  margin: 10px;
`;

const BeakDetailPage = () => {
  return (
    <PageLayout title="A" isWide>
      <Container>
        <InnerContainer>
          <MarginedBeakCard variant="detail" url={SampleMp3} respectCount={1} />
          <CommentList comments={[{ id: 'asd' }]} />
        </InnerContainer>
        <RightBoxContainer>
          <RightBox>
            <RightBoxItem title="Actions">a</RightBoxItem>
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
              <Tag>YEAH</Tag>
              <Tag>YEAH</Tag>
              <Tag>YEAH</Tag>
            </RightBoxItem>
            <RightBoxItem title="License">
              <Tag>YEAH</Tag>
              <Tag>YEAH</Tag>
              <Tag>YEAH</Tag>
            </RightBoxItem>
            <AuthorInfo>
              <AuthorInnerContainer>
                <Avatar src={getAvatarUrl('1111')} />
                <AuthorSummary>
                  <AuthorDisplayName>Beomjun Gil</AuthorDisplayName>
                  <AuthorUsername>@beomjun.gil</AuthorUsername>
                </AuthorSummary>
              </AuthorInnerContainer>
              <AuthorMessage>
                I’m guitarlist who knows
                <br />
                Programming.
              </AuthorMessage>
            </AuthorInfo>
          </DetailBox>
        </RightBoxContainer>
      </Container>
    </PageLayout>
  );
};

export default BeakDetailPage;
