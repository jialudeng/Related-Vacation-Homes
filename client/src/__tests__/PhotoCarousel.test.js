import React from 'react';
import {shallow, mount, render} from 'enzyme';
import PhotoCarousel from '../components/PhotoCarousel.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import dummyData from '../../dummyData.js';
import ImageSlide from '../components/ImageSlide.jsx';

describe('Test PhotoCarousel Component', () => {
    test('should render an <ImageSlide/> component', () => {
        const recommendation= dummyData[0].recommendations[0];
        const wrapper = shallow(<PhotoCarousel recommendation={recommendation}/>);
        expect(wrapper.find('ImageSlide')).toBeDefined();
    });
});

describe('Test ImageSlide Component', () => {
    test('should display an image passed down to <ImageSlide/>', () => {
        const image= dummyData[0].recommendations[0].images[0];
        const wrapper = shallow(<ImageSlide image={image}/>);
        expect(wrapper.prop(image)).toBe('http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo27');
    })
})

describe('Test ArrowButton Component', () => {
    test('should call a function when button is clicked', () => {
        const mockCallBack = jest.fn();
        const button = shallow(<ArrowButton direction="left" clickFunction={mockCallBack} graphic="<" showButtons="true"/>);
        button.find('Button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
})
