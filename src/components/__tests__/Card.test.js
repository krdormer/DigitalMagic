import { shallow } from 'enzyme';
import Card from '../Card/Card';

describe('<Card />', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<Card />);
    });
    it('displays an image', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });
});