import { FILE_API_ENDPOINT } from '@constants';

const getFileUrl = (path: string) => {
  return `${FILE_API_ENDPOINT}/download/${path}`;
};

export default getFileUrl;
