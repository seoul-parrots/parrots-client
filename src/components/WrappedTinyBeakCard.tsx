import { memo, useLayoutEffect, useState } from 'react';
import { useAuthenticatedAuth } from '@contexts/AuthContext';
import { ParrotsBeak } from '@generated/rest';
import TinyBeakCard from './TinyBeakCard';

export interface WrappedTinyBeakCardProps {
  beakId: string;
}

const WrappedTinyBeakCard = ({ beakId }: WrappedTinyBeakCardProps) => {
  const { queryClient } = useAuthenticatedAuth();
  const [beak, setBeak] = useState<ParrotsBeak>();
  useLayoutEffect(() => {
    (async () => {
      const { data } = await queryClient.queryGetBeakById({ id: beakId });
      setBeak(data.beak);
    })();
  }, [beakId, queryClient]);

  if (!beak) return null;

  return (
    <TinyBeakCard
      name={beak.name!}
      authorName={beak.creator_username!}
      address={beak.creator!}
    />
  );
};

export default memo(WrappedTinyBeakCard);
