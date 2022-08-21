import PageLayout from '@components/layouts/PageLayout';
import styled from '@emotion/styled';
import { boxStyles, focusTextStyles, gradientBackground } from '@styles';
import Upload from '@assets/images/upload.png';
import { ChangeEvent, useCallback, useState } from 'react';
import { File } from '@components/Icon';
import formatBytes from '@utils/formatBytes';
import CategoryListItem from '@components/CategoryListItem';
import RoundButton from '@components/RoundButton';
import Input from '@components/Input';
import TextArea from '@components/TextArea';

const UploadBox = styled.div`
  ${boxStyles};
  padding: 40px;
`;

const UploadBoxInner = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 640px;
  height: 478px;

  border: 1px dashed rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  cursor: pointer;
`;

const Text = styled.span`
  ${focusTextStyles};
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 19px;
  opacity: 0.5;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  gap: 16px;
  ${boxStyles};
  margin-bottom: 24px;
`;

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  gap: 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FileIconContainer = styled.div`
  display: flex;
  padding: 24px;
  gap: 10px;

  background: #1b191c;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

const FileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FileName = styled.span`
  font-size: 18px;
  line-height: 21px;
`;

const FileSize = styled.span`
  font-size: 14px;
  line-height: 17px;

  opacity: 0.5;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const Title = styled.span`
  font-weight: 700;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 24px;
  line-height: 29px;
`;

const YesButton = styled(RoundButton)`
  background: #ffffff;
`;

const NoButton = styled(RoundButton)`
  background: #ff4a4a;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LicenseName = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const LicenseDescription = styled.span`
  font-size: 14px;
  line-height: 17px;

  opacity: 0.5;
`;

const SubmitButton = styled(RoundButton)`
  margin-left: auto;
  ${gradientBackground};
`;

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('music');
  const [license, setLicense] = useState<string>('');
  const [isCompletedLicense, setIsCompletedLicense] = useState<boolean>(false);
  const handleChangeFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files?.[0]) return;
      setFile(event.currentTarget.files?.[0]);
    },
    []
  );
  return (
    <PageLayout title="Upload new beak">
      {!file ? (
        <UploadBox>
          <UploadBoxInner>
            <input type="file" hidden onChange={handleChangeFile} />
            <img src={Upload} alt="upload" />
            <Text>Upload File</Text>
            <Description>
              Supported Files: Audio File(*.wav, *.mp3, *.ogg) VSTi, ZIP Archive
            </Description>
          </UploadBoxInner>
        </UploadBox>
      ) : (
        <>
          <Box>
            <FileContainer>
              <FileIconContainer>
                <File />
              </FileIconContainer>
              <FileInfoContainer>
                <FileName>{file.name}</FileName>
                <FileSize>{formatBytes(file.size, 2)}</FileSize>
              </FileInfoContainer>
            </FileContainer>
            <CategoryList>
              <CategoryListItem
                currentValue={category}
                value="music"
                onClick={setCategory}
                name="Music"
                description="Fully composed music"
              />
              <CategoryListItem
                currentValue={category}
                value="sample"
                onClick={setCategory}
                name="Sample"
                description="Small piece of music"
              />
              <CategoryListItem
                currentValue={category}
                value="assets"
                onClick={setCategory}
                name="Assets"
                description="VSTi, Sheets, Whatever"
              />
            </CategoryList>
          </Box>
          {!license && (
            <Box>
              <Title>Are you want to allow to use this for everything?</Title>
              <ButtonContainer>
                <YesButton
                  onClick={() => {
                    setLicense('CC-0');
                    setIsCompletedLicense(true);
                  }}
                >
                  Yes, I will waive my copyright
                </YesButton>
                <NoButton
                  onClick={() => {
                    setLicense('_');
                  }}
                >
                  NO
                </NoButton>
              </ButtonContainer>
            </Box>
          )}
          {license && !license.includes('by') && (
            <Box>
              <Title>Allow adaptations of your work to be shared?</Title>
              <ButtonContainer>
                <YesButton onClick={() => setLicense('by')}>Yes</YesButton>
                <YesButton onClick={() => setLicense('by-nd')}>
                  Yes, as long as others share alike
                </YesButton>
                <NoButton onClick={() => setLicense('by-sa')}>NO</NoButton>
              </ButtonContainer>
            </Box>
          )}
          {license && license.includes('by') && !isCompletedLicense && (
            <Box>
              <Title>Allow commercial uses of your work?</Title>
              <ButtonContainer>
                <YesButton
                  onClick={() => {
                    setLicense((prev) => prev.replace('by', 'by-nc'));
                    setIsCompletedLicense(true);
                  }}
                >
                  Yes
                </YesButton>
                <NoButton onClick={() => setIsCompletedLicense(true)}>
                  NO
                </NoButton>
              </ButtonContainer>
            </Box>
          )}
          {isCompletedLicense && (
            <Box>
              <LicenseDescription>License</LicenseDescription>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <LicenseName>{license.toUpperCase()}</LicenseName>
                <a
                  href={`https://creativecommons.org/licenses/${license}/4.0/`}
                  style={{ textDecoration: 'underline', opacity: 0.5 }}
                >
                  About this license
                </a>
              </div>
            </Box>
          )}
          {isCompletedLicense && (
            <Box style={{ gap: 24 }}>
              <Input label="Title" placeholder="My awesome beak" />
              <Input label="Tags" placeholder="#Guitar, #Punk, #OtherTag" />
              <TextArea
                label="Description"
                placeholder="Description for beak"
              />
              <SubmitButton>Submit</SubmitButton>
            </Box>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default UploadPage;