import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../components/App.jsx';

describe('Unit Tests', () => {
    test('should render the app component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeTruthy();
    })
})