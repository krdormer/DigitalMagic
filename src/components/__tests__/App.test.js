import { shallow } from "enzyme";
import App from '../App/App';
import { Route, Switch } from 'react-router-dom';

const wrapper = shallow(
<App />);

describe('<App />', () => {
    it('renders the main div with class App', () => {
        expect(wrapper.find('.App').length).toEqual(1);
    });
    it('renders a Switch component for route changes', () => {
        expect(wrapper.find(Switch).length).toEqual(1);
    });
    it('renders 2 Route components', () => {
        expect(wrapper.find(Route).length).toEqual(3);
    });
});