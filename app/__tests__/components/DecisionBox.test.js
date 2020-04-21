import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DecisionBox from "../../javascript/components/components/DecisionBox";
import {shallow} from 'enzyme';
import fetch from 'isomorphic-fetch';
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

it('DecisionBox renders without crashing', () => {
    const film={comment: "test"}
    shallow(<DecisionBox filmDecision={film}/>)
})

it('renders a decision', () => {
    const historiesArr = [{decision:"Fight Club", comment:"great movie", id:1}, {decision: "Breakfast Club", comment:"i havent watched yet", id:2}]
    const component = mount(<HistoryShow histories={historiesArr} match={{params: {id:1} }}/>)
    expect(component.find('.comment')).toHaveLength(0)
  })

describe(`Component: DecisionBox`, () => {
    test(`DecisionBox renders with default props`, () => {
      const wrapper = shallow(<DecisionBox />);
      const filmDecision = {poster_path: "https://image.tmdb.org/t/p/w342/"}
      expect(wrapper).toMatchSnapshot();
    });

  it('calls componentDidMount', () => {
    const film={comment: "test"}
    sinon.spy(DecisionBox.prototype, 'componentDidMount');
    const wrapper = mount(<DecisionBox filmDecision={film}/>);
    expect(DecisionBox.prototype.componentDidMount).toHaveProperty('callCount', 1);
  });

});
