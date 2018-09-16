import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../theme';
import Button from '.';

describe('Button', () => {
  test('it shallows', () => {
    const CHILD = 'FOO';
    const component = (
      <Button theme={theme}>
FOO
      </Button>
    );
    const wrapper = shallow(component);
    console.log(wrapper.debug());
    expect(wrapper.text()).toBe(CHILD);
    expect(wrapper).toBeDefined();
  });
  test('snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
