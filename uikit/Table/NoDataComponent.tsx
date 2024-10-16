import React from 'react';
import noDataSvg from 'uikit/assets/noData.svg';
import css from '@emotion/css';
import NoData from 'uikit/NoData';

export default function NoDataComponent(props) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 32px 0;
      `}
    >
      {props.loading ? null : (
        <NoData>
          <img alt="no data found." src={noDataSvg} />
        </NoData>
      )}
    </div>
  );
}
