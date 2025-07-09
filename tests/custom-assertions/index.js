import { expect as baseExpect } from '@playwright/test';
import { toBeBoundingBoxCloseTo } from './boundingBoxCloseToMatcher';
import { toHaveUrlParameter } from './urlParameterMatcher';

export const expect = baseExpect.extend({
  toBeBoundingBoxCloseTo,
  toHaveUrlParameter,
});
