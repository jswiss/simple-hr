import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('it renders App without crashing', () => {
	test('renders w/o crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.length).toBe(1);
	});
});
