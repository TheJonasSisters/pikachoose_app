import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../javascript/components/App";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    it('Renders without crashing', () => {
      shallow(<App />)
    })
    it('Renders without crashing', () => {
        shallow(<App />)
      });
})

describe('Test navbar buttons', () => {
    test('should route to the right component', () => {
        const wrapper = mount(
            <Router>
              <div>
                      <Route path="/about" component={About} />
              </div>
            </Router>
        )
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
          }, {});
        expect(pathMap['/about']).toBe(About)
    });
});