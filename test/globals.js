import chai from 'chai';
import enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new Adapter()
});

global.React = React;
global.shallow = enzyme.shallow;
global.expect = chai.expect;
global.should = chai.should();
