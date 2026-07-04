import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHeroContent extends Schema.Component {
  collectionName: 'components_hero_hero_contents';
  info: {
    displayName: 'hero content';
    icon: 'archive';
  };
  attributes: {
    herotitle: Attribute.String;
    herodescription: Attribute.Text;
    heroimage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero-content': HeroHeroContent;
    }
  }
}
///
