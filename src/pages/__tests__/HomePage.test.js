import { shallow } from 'enzyme';
import HomePage from '../HomePage/HomePage';

describe('<HomePage />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });
    describe('JSX / HTML Content', () => {
        it('renders an h1 tag with class homepage-title', () => {
            expect(wrapper.find('.homepage-title').length).toEqual(1);
        });
        it('renders 2 p tags with class homepage-text', () => {
            expect(wrapper.find('.homepage-text').length).toEqual(2);
        });
    });
});