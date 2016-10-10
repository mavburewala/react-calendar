import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Event from '../index';

describe('<Event />', () => {
  it('should render event tab', () => {
    const eventData = { start: 0, duration: 15, title: 'Exercise' };
    const renderedComponent = shallow(
      <Event eventData={eventData} />
    );
    const renderedRow = renderedComponent.find({ class: 'row' });
    expect(renderedRow).toExist();
    // expect(renderedComponent.contains(
    //   <div> </div>
    // )).toEqual(true);
  });
  it('should have top in the right position', () => {
    const eventData = { start: 0, duration: 15, title: 'Exercise' };
    const renderedComponent = shallow(
      <Event eventData={eventData} />
    );
    const renderedRow = renderedComponent.find({ top: eventData.start });
    expect(renderedRow).toExist();
  });
  it('should have correct height', () => {
    const eventData = { start: 0, duration: 15, title: 'Exercise' };
    const expectedHeight = (2000 / 540) * eventData.duration;
    const renderedComponent = shallow(
      <Event eventData={eventData} />
    );
    const renderedRow = renderedComponent.find({ height: expectedHeight });
    expect(renderedRow).toExist();
  });
});
