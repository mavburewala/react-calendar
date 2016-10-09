/**
 * Testing our Button component
 */

import Button from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const handleRoute = () => {};
const href = 'http://mxstbr.com';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Button href={href} {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should not adopt a type attribute when rendering an <a> tag', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ href, type });
    expect(renderedComponent.prop('type')).toNotExist();
  });

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ handleRoute, type });
    expect(renderedComponent.prop('type')).toNotExist();
  });
});
