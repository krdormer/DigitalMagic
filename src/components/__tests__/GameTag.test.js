import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GameTag from '../GameTag/GameTag';

describe('<GameTag />', () => {
    const wrapper = mount(<BrowserRouter><GameTag /></BrowserRouter>)
    it('renders a div with classname game-tag', () => {
        expect(wrapper.find('div').find('.game-tag').length).toEqual(1);
    });
    it('renders an img tag with class game-tag-img', () => {
        expect(wrapper.find('img').find('.game-tag-img').length).toEqual(1);
    })
});