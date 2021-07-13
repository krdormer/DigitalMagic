import { shallow } from 'enzyme';
import Card from '../Card/Card';
import CardFlower from '../CardFlower/CardFlower';

describe('<CardFlower />', () => {
    const wrapper = shallow(<CardFlower />);
    it('renders a div with class card-flower', () => {
        expect(wrapper.find('div').find('.card-flower').length).toEqual(1);
    });
    it('renders 7 divs, with classes one ... seven', () => {
        expect(wrapper.find('div').find('.one').length).toEqual(1);
        expect(wrapper.find('div').find('.two').length).toEqual(1);
        expect(wrapper.find('div').find('.three').length).toEqual(1);
        expect(wrapper.find('div').find('.four').length).toEqual(1);
        expect(wrapper.find('div').find('.five').length).toEqual(1);
        expect(wrapper.find('div').find('.six').length).toEqual(1);
        expect(wrapper.find('div').find('.seven').length).toEqual(1);
    });
    it('renders 7 Card components', () => {
        expect(wrapper.find(Card).length).toEqual(7);
    });
})