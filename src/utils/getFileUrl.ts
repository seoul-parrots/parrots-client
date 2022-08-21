const getFileUrl = (path: string) => {
  return `http://10.200.96.203:8080/download?path=${path}`;
};

export default getFileUrl;
