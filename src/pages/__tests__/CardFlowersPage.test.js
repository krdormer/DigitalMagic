import { mount } from 'enzyme';
import CardFlower from '../../components/CardFlower/CardFlower';
import CardTable from '../../components/CardTable/CardTable';
import CardFlowersPage from '../CardFlowersPage/CardFlowersPage';

describe('<CardFlowersPage />', () => {
    const wrapper = mount(<CardFlowersPage />);
    it('renders a div with class card-flowers-page', () => {
        expect(wrapper.find('div').find('.card-flowers-page').length).toEqual(1);
    });
    it('renders a CardTable component', () => {
        expect(wrapper.find(CardTable).length).toEqual(1);
    });
    it('renders a div with class card-flower-container', () => {
        expect(wrapper.find('div').find('.card-flower-container').length).toEqual(1);
    });
    it('renders 3 divs with class flower', () => {
        expect(wrapper.find('div').find('.flower').length).toEqual(3);
    });
    it('renders 3 CardFlower components', () => {
        expect(wrapper.find(CardFlower).length).toEqual(3);
    });
});