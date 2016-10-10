import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Calendar from '../index';

describe('<Calendar />', () => {
  it('should render Calendar', () => {
    const endTime = 540;
    const events = [
      { start: 0, duration: 15, title: 'Exercise' },
      { start: 25, duration: 30, title: 'Travel to work' },
      { start: 30, duration: 30, title: 'Plan day' },
      { start: 60, duration: 15, title: 'Review yesterdays commits' },
      { start: 100, duration: 15, title: 'Code review' },
      { start: 180, duration: 90, title: 'Have lunch with John' },
      { start: 360, duration: 30, title: 'Skype call' },
      { start: 370, duration: 45, title: 'Follow up with designer' },
      { start: 405, duration: 30, title: 'Push up branch' },
    ];
    const renderedComponent = shallow(
      <Calendar endTime={endTime} events={events} />
    );
    const renderedRow = renderedComponent.find({ class: 'row' });
    expect(renderedRow).toExist();
  });
  it('should render Calendar', () => {
    const endTime = 540;
    const events = [
      { start: 0, duration: 15, title: 'Exercise' },
      { start: 25, duration: 30, title: 'Travel to work' },
      { start: 30, duration: 30, title: 'Plan day' },
      { start: 60, duration: 15, title: 'Review yesterdays commits' },
      { start: 100, duration: 15, title: 'Code review' },
      { start: 180, duration: 90, title: 'Have lunch with John' },
      { start: 360, duration: 30, title: 'Skype call' },
      { start: 370, duration: 45, title: 'Follow up with designer' },
      { start: 405, duration: 30, title: 'Push up branch' },
    ];
    const renderedComponent = shallow(
      <Calendar endTime={endTime} events={events} />
    );
    console.log('Musa', JSON.stringify(renderedComponent.props()));
    expect(renderedComponent.props).toExist();
    expect(renderedComponent.props().id).toEqual('dayView');
  });
});
