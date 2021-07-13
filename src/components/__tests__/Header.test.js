import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

describe('<Header />', () => {
    let wrapper = shallow(<Header />);
    it('renders a div with class header', () => {
        expect(wrapper.find('.header').length).toEqual(1);
    });
    it('renders 2 Link components', () => {
        expect(wrapper.find(Link).length).toEqual(2);
    });
})