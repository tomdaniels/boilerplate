import Landing from '../../src/components/landing';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Landing />);
});

describe('landing.js', () => {
  it('should render the component', () => {
    expect(wrapper.find('.styles')).to.be.present();
  });
});
