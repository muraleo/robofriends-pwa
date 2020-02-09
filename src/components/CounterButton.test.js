import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';


it('test counter button', () => {
    expect.assertions(2);
    const wrapper = shallow(<CounterButton />);
    expect(wrapper.state('count')).toEqual(1);

    wrapper.find('button').simulate('click');
    expect(wrapper.state('count')).toEqual(2);
})