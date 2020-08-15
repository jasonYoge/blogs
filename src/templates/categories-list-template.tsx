import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../components/Layout/Layout';
import Page from '../components/Page/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const CategoriesListTemplate = (): JSX.Element => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
