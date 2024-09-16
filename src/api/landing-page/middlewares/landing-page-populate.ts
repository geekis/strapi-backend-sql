/**
 * `landing-page-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  blocks: {
    populate: {
      link: {
        populate: '*',
      },
      card: {
        populate: {
          link: {
            populate: '*',
          },
          image: {
            populate: '*',
          },
        },
      },
    },
  },
  metadata: {
    populate: {
      metaImage: {
        fields: ['name', 'url'],
      },
    },
  },
};

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
