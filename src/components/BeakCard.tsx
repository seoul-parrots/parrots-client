import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import styled from '@emotion/styled';
import { boxStyles } from '@styles';
import WaveSurfer from 'wavesurfer.js';
import { css } from '@emotion/react';
import BgGradient from '@assets/images/bg_gradient.png';
import { Pause, Play } from '@components/Icon';

const Container = styled.div`
  ${boxStyles};
  padding: 0 24px;
`;

const Wave = styled.div<{ isDetail: boolean }>`
  ${({ isDetail }) =>
    isDetail
      ? css`
          margin: 120px 36px;
        `
      : css`
          margin: 8px 0;
        `};
`;

const InnerContainer = styled.div<{ isClickable: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0 20px;
  gap: 12px;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `};
`;

const PlayButton = styled.button<{ isPlaying: boolean; isShowText: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 16px;
  ${({ isShowText }) =>
    isShowText &&
    css`
      width: 134px;
    `}
  gap: 22px;

  ${({ isPlaying }) =>
    isPlaying
      ? css`
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            url(${BgGradient}) no-repeat center;
          background-size: cover;
        `
      : css`
          background: rgba(255, 255, 255, 0.1);
        `}
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  line-height: 21px;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

const AuthorOrCount = styled.span<{ isMine?: boolean }>`
  font-size: 14px;
  line-height: 17px;
  ${({ isMine }) =>
    css`
      opacity: ${isMine ? 0.5 : 1};
    `};
`;

const RespectCount = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  opacity: 0.5;
  margin-left: auto;
`;

interface BaseBeakCardProps {
  title?: unknown;
  author?: unknown;
  url: string;
  respectCount: number;
  commentCount?: unknown;
  className?: string;
  onClick?: () => void;
}

interface FeedBeakCardProps extends BaseBeakCardProps {
  variant: 'feed';
  title: string;
  author: string;
}

interface DetailBeakCardProps extends BaseBeakCardProps {
  variant: 'detail';
}

interface MyBeakCardProps extends BaseBeakCardProps {
  variant: 'mine';
  commentCount: number;
  title: string;
}

const COLORS = ['#ffa5ea', '#f8dfd8', '#45dff8', '#bc8deb'];

export type BeakCardProps =
  | FeedBeakCardProps
  | DetailBeakCardProps
  | MyBeakCardProps;

const BeakCard = ({
  variant,
  title,
  author,
  url,
  respectCount,
  commentCount,
  className,
  onClick,
}: BeakCardProps) => {
  const waveSurferRef = useRef<WaveSurfer>();
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const progressColor = useMemo(
    () => COLORS[Math.floor(Math.random() * 4)],
    []
  );
  useEffect(() => {
    if (!audioRef.current || !waveRef.current || waveSurferRef.current) return;

    waveSurferRef.current = WaveSurfer.create({
      barWidth: 4,
      barGap: 4,
      cursorWidth: 1,
      container: waveRef.current,
      backend: 'WebAudio',
      height: variant === 'feed' ? 130 : 115,
      progressColor,
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    waveSurferRef.current.load(audioRef.current);
  }, [progressColor, variant]);

  const handleClickPlay = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!waveSurferRef.current) return;
      waveSurferRef.current.playPause();
      setIsPlaying((prev) => !prev);
    },
    []
  );

  const isDetail = variant === 'detail';

  return (
    <Container className={className}>
      <Wave ref={waveRef} isDetail={isDetail} />
      <audio ref={audioRef} src={url}>
        <track kind="captions" />
      </audio>
      <InnerContainer onClick={onClick} isClickable={!!onClick}>
        <PlayButton
          isPlaying={isPlaying}
          isShowText={isDetail}
          onClick={handleClickPlay}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          {isDetail && <span>{isPlaying ? 'Pause' : 'Play'}</span>}
        </PlayButton>
        {variant !== 'detail' && (
          <InfoContainer>
            <Title>{title}</Title>
            <AuthorOrCount isMine={variant === 'mine'}>
              {variant === 'feed'
                ? author
                : `${respectCount} Respects · ${commentCount} Comments`}
            </AuthorOrCount>
          </InfoContainer>
        )}
        {variant !== 'mine' && (
          <RespectCount>{respectCount} Respects</RespectCount>
        )}
      </InnerContainer>
    </Container>
  );
};

export default BeakCard;
