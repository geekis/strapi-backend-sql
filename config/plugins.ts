export default ({env}) => ({
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      // GraphQL settings
    },
  },
});
