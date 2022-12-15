import React from 'react';
import renderer from 'react-test-renderer';
import {Profile} from '../Components/Profile';

it('checking function inside profile', () => {
  const instance = renderer.create(<Profile />).getInstance();

  expect(instance.getName('Sandipan', 'Saha')).toEqual('Sandipan Saha');
});

it('Checking state value change', () => {
  const instance = renderer.create(<Profile />).getInstance();

  expect(instance.state.age).toEqual(0);

  instance.updateAge(30);

  expect(instance.state.age).toEqual(30);
});
