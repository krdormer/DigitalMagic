import { mount } from 'enzyme';
import CardTable from '../CardTable/CardTable';

describe('<CardTable />', () => {
    it('renders a div with class card-table', () => {
        let wrapper = mount(<CardTable />)
        expect(wrapper.find('.card-table').length).toEqual(1)
    });
});