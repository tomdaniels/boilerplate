import chai from 'chai';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new Adapter()
});

global.shallow = enzyme.shallow;
global.expect = chai.expect;
global.should = chai.should();
global.React = require('react');
