import React from 'react';
import Home from '../Components/Home';
import rederer from 'react-test-renderer';

it('home renders correctly', () => {
  rederer.create(<Home />);
});

// it('percent to value function test', () => {
//   let instance = rederer.create(<Home />).getInstance();
//   console.log(instance);
//   expect(instance.percentageToValue(50, 50)).toEqual(25);
// });
// This will not work as functional components does not have instance

it('home snapshot test', () => {
  const snap = rederer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});

it('home text input identification', () => {
  const elementTree = rederer.create(<Home />).toJSON();
  let element = elementTree.children.find(
    node => node.props.testID === 'sampletext',
  );

  expect(element).toBeDefined();
});
