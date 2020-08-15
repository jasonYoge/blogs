import CMS from 'netlify-cms-app';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';
import { ComponentType } from 'react';

CMS.registerPreviewTemplate('pages', PagePreview as ComponentType<any>);
CMS.registerPreviewTemplate('posts', PostPreview as ComponentType<any>);
