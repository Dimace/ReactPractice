import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import MainHeader from './MainHeader.js';
import { shallow, mount, render } from 'enzyme';

it('check presence of the logo', () => {
  // Arrange
  const component = <MainHeader logo = { logo } title = 'hi'/>;
  // Act
  const element = shallow(component).find('.App-logo');
  // Assert
  expect(element).toHaveLength(1);
});

it('check title', () => {
  // Arrange
  const component = <MainHeader logo = { logo } title = 'test text'/>;
  // Act
  const element = shallow(component).find('.App-title').text();
  // Assert
  expect(element).toMatch(component.props.title);
});
