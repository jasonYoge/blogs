import React from 'react';

import { Entry, WidgetFor } from '../../types';

interface IProps {
  entry: Entry;
  widgetFor: WidgetFor;
};

const PagePreview = ({ entry, widgetFor }: IProps): JSX.Element => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{body}</div>
    </div>
  );
};

export default PagePreview;
