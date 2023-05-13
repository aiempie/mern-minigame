const backendUrl = process.env.REACT_APP_BACKEND_URL;

const ApiUrl = (api) => {
  return `${backendUrl}${api}`;
};

export default ApiUrl;
