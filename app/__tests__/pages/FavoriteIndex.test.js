import React from "react";
import ReactDOM from "react-dom";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FavoriteIndex from "../../javascript/components/pages/FavoriteIndex";
import {shallow} from 'enzyme';



Enzyme.configure({ adapter: new Adapter() })

it('FavoriteIndex renders without crashing', () => {
  const favoritesArr = [{
        comment: "this movie is so wholesum & stupid."
      }]
  shallow(<FavoriteIndex favorites= {favoritesArr} />)
})
