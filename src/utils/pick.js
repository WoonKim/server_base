const _ = require('lodash');

const pick = (params, keys) => {
  return _.reduce(
    keys,
    (obj, key) => {
      if (_.has(params, key)) {
        obj[key] = params[key];
      }
      return obj;
    },
    {}
  );
};
module.exports = pick;
