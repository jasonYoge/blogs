import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Page from '../components/Page/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = (): JSX.Element => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
