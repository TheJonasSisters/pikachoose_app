import React from 'react';;
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as components from "../javascript/components/AllComponents";

Enzyme.configure({ adapter: new Adapter() });

Object.keys(components).forEach(DecisionBox=> {
  const Component = components[DecisionBox];
  describe(`Component: ${DecisionBox}`, () => {
    test(`${DecisionBox} renders with default props`, () => {
      const wrapper = shallow(<Component />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(GenreButtons=> {
  const Component = components[GenreButtons];
  describe(`Component: ${GenreButtons}`, () => {
    test(`${GenreButtons} renders with default props`, () => {
      const wrapper = shallow(<Component />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(LandingPage=> {
  const Component = components[LandingPage];
  describe(`Component: ${LandingPage}`, () => {
    test(`${LandingPage} renders with default props`, () => {
      const wrapper = shallow(<LandingPage />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 