import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';


it('test counter button', () => {
    const wrapper = shallow(<CounterButton />);
    expect(wrapper.state('count')).toEqual(1);
})