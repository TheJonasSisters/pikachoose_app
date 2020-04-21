import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../javascript/components/components/Header'

Enzyme.configure({ adapter: new Adapter() });

it('Header component has Navbar component', () => {
  const wrap = shallow(<Header/>)
  expect(wrap.text()).toEqual('<Navbar />')
})

describe(`Component: Header`, () => {
  test(`Header renders with default props`, () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
