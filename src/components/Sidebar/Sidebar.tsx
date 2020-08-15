import React from 'react';

import { useSiteMetadata } from '../../hooks';

import Author from './Author/Author';
import Contacts from './Contacts/Contacts';
import Copyright from './Copyright/Copyright';
import Menu from './Menu/Menu';
import styles from './Sidebar.module.scss';

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props): JSX.Element => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
