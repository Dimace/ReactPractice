import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MainHeader } from '../src/MainHeader/MainHeader.js';
import logo from '../src/logo.svg';

storiesOf('Options', module)
  .add('option 1', () => (
    <MainHeader logo = {logo} title = {'option1'} />
  ))
  .add('option 2', () => (
    <MainHeader logo = {logo} title = {'option2'} />
  ));   