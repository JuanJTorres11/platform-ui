import React from 'react';
import get from 'lodash/get';
import Page404 from 'components/pages/404';
import Page401 from 'components/pages/401';
import Page500 from 'components/pages/500';
import ClientError from 'components/pages/ClientError';

export const ERROR_STATUS_KEY = 'statusCode';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    if (get(err, ERROR_STATUS_KEY) === 401) {
      if (res) res.status(401);
    }
    return {
      [ERROR_STATUS_KEY]: get(res, ERROR_STATUS_KEY) || get(err, ERROR_STATUS_KEY) || null,
    };
  }

  render() {
    const errorCode = this.props[ERROR_STATUS_KEY];
    if (errorCode === 404) {
      return <Page404 />;
    }
    if (errorCode === 500) {
      return <Page500 />;
    }
    if (errorCode === 401) {
      return <Page401 />;
    }
    if (errorCode) {
      return <Page500 />;
    }
    return <ClientError />;
  }
}

export default Error;
