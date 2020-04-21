import React from "react";
import { Button, Container } from "reactstrap"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreButtons from "../../javascript/components/components/GenreButtons";
import sinon from "sinon";
import fetch from 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

describe('GenreButtons component', () => {
  it('Renders without crashing', () => {
    shallow(<GenreButtons />)
  })
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<GenreButtons />);
});
describe('<GenreButtons /> rendering', () => {
    it('should render one <h5>', () => {
        expect(wrapper.find('h5')).toHaveLength(1);
    });
it('should render 3 <Button>', () => {
        expect(wrapper.find(Button)).toHaveLength(3);
    });
});

it('Test click event', () => {
  const mockCallBack = jest.fn();
  const button = mount((<Button onClick={mockCallBack}>Ok!</Button>));
  button.find("Button").simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

describe(`Component: GenreButton`, () => {
  test(`GenreButton renders with default props`, () => {
    const wrapper = shallow(<GenreButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
