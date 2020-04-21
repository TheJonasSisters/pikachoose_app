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

Object.keys(components).forEach(FavoriteIndex=> {
  const Component = components[FavoriteIndex];
  describe(`Component: ${FavoriteIndex}`, () => {
    test(`${FavoriteIndex} renders with default props`, () => {
      const wrapper = shallow(<FavoriteIndex />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(Header=> {
  const Component = components[Header];
  describe(`Component: ${Header}`, () => {
    test(`${Header} renders with default props`, () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(About=> {
  const Component = components[About];
  describe(`Component: ${About}`, () => {
    test(`${About} renders with default props`, () => {
      const wrapper = shallow(<About />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(FavoriteShow=> {
  const Component = components[FavoriteShow];
  describe(`Component: ${FavoriteShow}`, () => {
    test(`${FavoriteShow} renders with default props`, () => {
      const wrapper = shallow(<FavoriteShow />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(NotFoundPage=> {
  const Component = components[NotFoundPage];
  describe(`Component: ${NotFoundPage}`, () => {
    test(`${NotFoundPage} renders with default props`, () => {
      const wrapper = shallow(<NotFoundPage />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(HistoryShow=> {
  const Component = components[HistoryShow];
  describe(`Component: ${HistoryShow}`, () => {
    test(`${HistoryShow} renders with default props`, () => {
      const wrapper = shallow(<HistoryShow />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 

Object.keys(components).forEach(HistoryIndex=> {
  const Component = components[HistoryIndex];
  describe(`Component: ${HistoryIndex}`, () => {
    test(`${HistoryIndex} renders with default props`, () => {
      const wrapper = shallow(<HistoryIndex />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 