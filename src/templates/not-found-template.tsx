import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../components/Layout/Layout';
import Page from '../components/Page/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = (): JSX.Element => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
