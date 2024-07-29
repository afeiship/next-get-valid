import nx from '@jswork/next';

const ERR_MSG = 'nx.getValid: isValid must be a function or you can add a hook to nx.GET_VALID_HOOKS';

nx.GET_VALID_HOOKS = {
  valid: (value) => !(value === null || value === undefined),
};

nx.getValid = function (inTarget, inPath, inDefaults, inIsValid) {
  const hasValidFn = typeof inIsValid !== 'undefined';
  const defaults = hasValidFn ? undefined : inDefaults;
  const res = nx.get(inTarget, inPath, defaults);
  if (!hasValidFn) return res;
  const isValid = nx.GET_VALID_HOOKS[inIsValid] || inIsValid;
  if(typeof isValid !== 'function') throw new Error(ERR_MSG);
  return isValid(res) ? res: inDefaults;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.getValid;
}

export default nx.getValid;
