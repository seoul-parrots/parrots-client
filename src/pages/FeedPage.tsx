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
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import useInputProps from '@hooks/useInputProps';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { ParrotsBeak } from '@generated/rest';

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
  const { queryClient } = useAuthenticatedAuth();
  const { value: searchValue, onChange: onChangeSearchValue } =
    useInputProps('');
  const [tag, setTag] = useState('');
  const [beaks, setBeaks] = useState<ParrotsBeak[]>([]);

  const loadFeedItems = useCallback(async () => {
    if (tag) {
      const { data } = await queryClient.queryGetBeaksByTag({
        tag,
      });
      setBeaks(data.beaks ?? []);
      return;
    }

    if (searchValue) {
      const { data } = await queryClient.queryGetBeaksByNameSubstring({
        nameSubstring: searchValue,
      });
      setBeaks(data.beaks ?? []);
      return;
    }

    const { data } = await queryClient.queryGetAllBeaks();
    setBeaks(data.beaks ?? []);
  }, [queryClient, searchValue, tag]);

  useLayoutEffect(() => {
    loadFeedItems();
  }, [loadFeedItems]);

  const title = useMemo(() => {
    if (tag) {
      return `Search Result: ‘${tag}’`;
    }

    if (searchValue) {
      return `Search Result: ‘${searchValue}’`;
    }

    return 'Explore';
  }, [searchValue, tag]);
  return (
    <PageLayout title={title} isWide>
      <Container>
        <Feed>
          {beaks.map((beak) => (
            <FeedItem key={beak.id} beak={beak} />
          ))}
        </Feed>
        <RightBoxContainer>
          <SearchBox>
            <Input
              leftIcon={<Search size={24} />}
              placeholder="Where’s your inspiration"
              variant="small"
              value={searchValue}
              onChange={onChangeSearchValue}
            />
            {TAGS.map(({ title, options }) => (
              <RightBoxItem key={title} title={title}>
                {options.map((option) => (
                  <Tag
                    key={option}
                    onClick={() =>
                      setTag((prev) => (prev === option ? '' : option))
                    }
                    isSelected={tag === option}
                  >
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
