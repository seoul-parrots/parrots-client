import PageLayout from '@components/layouts/PageLayout';
import styled from '@emotion/styled';
import BeakCard from '@components/BeakCard';
import SampleMp3 from '@assets/sample.mp3';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const MyBeakListPage = () => {
  return (
    <PageLayout title="My beaks" isWide>
      <Container>
        <BeakCard
          variant="mine"
          url={SampleMp3}
          title="asd"
          respectCount={0}
          commentCount={0}
        />
        <BeakCard
          variant="mine"
          url={SampleMp3}
          title="asd"
          respectCount={0}
          commentCount={0}
        />
        <BeakCard
          variant="mine"
          url={SampleMp3}
          title="asd"
          respectCount={0}
          commentCount={0}
        />
        <BeakCard
          variant="mine"
          url={SampleMp3}
          title="asd"
          respectCount={0}
          commentCount={0}
        />
        <BeakCard
          variant="mine"
          url={SampleMp3}
          title="asd"
          respectCount={0}
          commentCount={0}
        />
      </Container>
    </PageLayout>
  );
};

export default MyBeakListPage;
