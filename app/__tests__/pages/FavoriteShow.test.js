import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FavoriteShow from "../../javascript/components/pages/FavoriteShow"
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

it('FavoriteShow renders without crashing', () => {
  const favoritesArr = [{decision:"Fight Club", comment:"great movie", id:1}]
  shallow(<FavoriteShow favorites={favoritesArr} match={{params: {id:1} }}/>)
})

it('FavoriteShow renders one favorite', () => {
  const favoritesArr = [{decision:"Fight Club", comment:"great movie", id:1}, {decision: "Breakfast Club", comment:"i havent watched yet", id:2}]
  const component = mount(<FavoriteShow favorites={favoritesArr} match={{params: {id:1} }}/>)
  expect(component.find('FavoriteShow')).toHaveLength(1)
})

