import { RadioOn, RadioOff } from '@components/Icon';
import styled from '@emotion/styled';
import { memo } from 'react';

const Container = styled.label`
  display: flex;
  padding: 20px;
  gap: 16px;

  background: #1b191c;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const CategoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryName = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const CategoryDescription = styled.span`
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
`;

export interface CategoryListItemProps {
  currentValue: string;
  value: string;
  onClick: (value: string) => void;
  name: string;
  description: string;
}

const CategoryListItem = ({
  currentValue,
  value,
  onClick,
  name,
  description,
}: CategoryListItemProps) => {
  return (
    <Container onClick={() => onClick(value)}>
      {currentValue === value ? <RadioOn size={16} /> : <RadioOff size={16} />}
      <CategoryInfoContainer>
        <CategoryName>{name}</CategoryName>
        <CategoryDescription>{description}</CategoryDescription>
      </CategoryInfoContainer>
    </Container>
  );
};

export default memo(CategoryListItem);
