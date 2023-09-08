import { isUrl } from './isUrl';

export const urlRulesValidation = {
  required: {
    value: true,
    message: 'Required',
  },
  validate: (value) => isUrl(value) || 'This is not a url',
};
