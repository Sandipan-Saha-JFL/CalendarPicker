import {percentageToValue} from '../utils/utils';

it('percent to value function test', () => {
  expect(percentageToValue(50, 50)).toEqual(25);
});
