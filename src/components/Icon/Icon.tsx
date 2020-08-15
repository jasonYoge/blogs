import React from 'react';

import styles from './Icon.scss';

type Props = {
  name: string;
  icon: {
    viewBox?: string;
    path?: string;
  };
};

const Icon = ({ name, icon }: Props): JSX.Element => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
