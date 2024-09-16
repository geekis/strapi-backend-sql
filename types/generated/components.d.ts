import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    icon: 'crown';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_card';
  info: {
    displayName: 'card';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    Type: Attribute.Enumeration<
      ['Fors\u00ED\u00F0a', 'Starfsma\u00F0ur', 'Vara']
    > &
      Attribute.DefaultTo<'Vara'>;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    text: Attribute.Text;
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksMainContent extends Schema.Component {
  collectionName: 'components_blocks_main_contents';
  info: {
    displayName: 'Main Content';
  };
  attributes: {
    Content: Attribute.Blocks;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'expand';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link', true>;
    Image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.row': BlocksRow;
      'blocks.main-content': BlocksMainContent;
      'blocks.hero': BlocksHero;
    }
  }
}
