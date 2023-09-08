export const findInputError = (errors, name) => {
  const filtered = Object.keys(errors)
    .filter((key) => key === name)
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
};
