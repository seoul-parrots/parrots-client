import BeakCard from '@components/BeakCard';
import SampleMp3 from '@assets/sample.mp3';
import PageLayout from '@components/layouts/PageLayout';
import styled from '@emotion/styled';
import FeedItem from '@components/FeedItem';
import RightBoxContainer from '@components/RightBoxContainer';
import RightBox from '@components/RightBox';
import Input from '@components/Input';
import { Search } from '@components/Icon';
import RightBoxItem from '@components/RightBoxItem';
import Tag from '@components/Tag';
import { TAGS } from '@constants';

const Container = styled.div`
  display: flex;
  gap: 70px;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;

const SearchBox = styled(RightBox)`
  gap: 32px;
`;

const FeedPage = () => {
  return (
    <PageLayout title="Explore" isWide>
      <Container>
        <Feed>
          <FeedItem
            title="aaa"
            author="aaaa"
            url={SampleMp3}
            respectCount={1}
            address=""
            createdAt={new Date(2022, 7, 20, 23, 0, 0)}
          />
          <FeedItem
            title="aaa"
            author="aaaa"
            url={SampleMp3}
            respectCount={1}
            address=""
            createdAt={new Date(2022, 7, 20, 23, 0, 0)}
          />
          <FeedItem
            title="aaa"
            author="aaaa"
            url={SampleMp3}
            respectCount={1}
            address=""
            createdAt={new Date(2022, 7, 20, 23, 0, 0)}
          />
          <FeedItem
            title="aaa"
            author="aaaa"
            url={SampleMp3}
            respectCount={1}
            address=""
            createdAt={new Date(2022, 7, 20, 23, 0, 0)}
          />
        </Feed>
        <RightBoxContainer>
          <SearchBox>
            <Input
              leftIcon={<Search size={24} />}
              placeholder="Where’s your inspiration"
              variant="small"
            />
            {TAGS.map(({ title, options }) => (
              <RightBoxItem key={title} title={title}>
                {options.map((option) => (
                  <Tag key={option} title={option}>
                    {option}
                  </Tag>
                ))}
              </RightBoxItem>
            ))}
          </SearchBox>
        </RightBoxContainer>
      </Container>
    </PageLayout>
  );
};

export default FeedPage;
