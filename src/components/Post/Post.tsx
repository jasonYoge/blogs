import React from 'react';
import { Link } from 'gatsby';

import { Node } from '../../types';

import Author from './Author/Author';
import Comments from './Comments/Comments';
import Content from './Content/Content';
import Meta from './Meta/Meta';
import Tags from './Tags/Tags';
import styles from './Post.module.scss';

type Props = {
  post: Node;
};

const Post = ({ post }: Props): JSX.Element => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
