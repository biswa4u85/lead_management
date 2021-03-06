import { extend } from 'umi-request';
import { notification } from 'antd';
const codeMessage = {
  200: 'The server successfully returned the requested data. ',
  201: 'New or modified data is successful.  ',
  202: 'A request has entered the background queue (asynchronous task).  ',
  204: 'The data was deleted successfully.  ',
  400: 'There was an error in the request sent, and the server did not create or modify the data.  ',
  401: 'The user does not have permission (the token, username, password is wrong). ',
  403: 'The user is authorized, but access is forbidden.  ',
  404: 'The request sent was for a record that did not exist, and the server did not operate.  ',
  406: 'The requested format is not available.  ',
  410: 'The requested resource is permanently deleted and will no longer be available.  ',
  422: 'When creating an object, a validation error occurred.  ',
  500: 'An error occurred in the server, please check the server.  ',
  502: 'Gateway error.  ',
  503: 'The service is unavailable, and the server is temporarily overloaded or maintained.  ',
  504: 'The gateway timed out.  ',
};

const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Error，from server',
      message: 'Try again',
    });
  }
  return response;
};

const request = extend({
  errorHandler,
  credentials: 'include',
  // headers: {
  //   'Authorization': 'token 85f3b52a1ddcae2:06d47d96a013d82',
  // },
});
export default request;
