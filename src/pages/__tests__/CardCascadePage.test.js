import { mount } from 'enzyme';
import Card from '../../components/Card/Card';
import CardTable from '../../components/CardTable/CardTable';
import CardCascadePage from '../CardCascadePage/CardCascadePage';

import { BrowserRouter } from 'react-router-dom';

describe('<CardCascadePage />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<BrowserRouter><CardCascadePage /></BrowserRouter>);
    });
    describe('JSX / HTML Content', () => {
        it('renders a div with class card-game-page', () => {
            expect(wrapper.find('.card-game-page').length).toEqual(1)
        });
        it('renders a div with class card-game-board', () => {
            expect(wrapper.find('.card-game-board').length).toEqual(1);
        });
        it('renders a CardTable component', () => {
            expect(wrapper.find(CardTable).length).toEqual(1);
        });
        it('renders 21 Card components', () => {
            expect(wrapper.find(Card).length).toEqual(21);
        });
        it('renders 3 buttons', () => {
            expect(wrapper.find('button').length).toEqual(3);
        });
    });
});