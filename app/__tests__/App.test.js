import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../javascript/components/App";
import fetch from 'isomorphic-fetch';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    it('Renders without crashing', () => {
      shallow(<App />)
    })
})

describe('Test routes', () => {
  test('should route to the right component', () => {
      const wrapper = mount(
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/user_favorites" component={FavoriteIndex} />
                      <Route exact path="/user_history" component={HistoryIndex} />
                      <Route exact path="/" component={LandingPage} />
                  </Switch>
              </div>
          </Router>
      )
      const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
          const routeProps = route.props();
          pathMap[routeProps.path] = routeProps.component;
          return pathMap;
        }, {});
      expect(pathMap['/user_favorites']).toBe(FavoriteIndex)
      expect(pathMap['/user_history']).toBe(HistoryIndex)
      expect(pathMap['/']).toBe(LandingPage)
  });
});

describe('rendering', () => {
  let wrapper, showUrl
   beforeEach(() => {
     props =  {
       location: { pathname: 'testUrl1'},
       showUrl: (url) => {}
     }
     showUrl = sinon.stub(props, 'showUrl')
   })
   afterEach(() => {
     showUrl.reset()
   })

   it('componentWillReceiveProps', () => {
    wrapper = mount(<FavoriteShow  {...props}/>)
    wrapper.setProps({location: { pathname: 'testUrl2'}})
    expect(showUrl.calledOnce).toBe(true)
   })

   it('componentWillReceiveProps', () => {
    wrapper = mount(<HistoryShow  {...props}/>)
    wrapper.setProps({location: { pathname: 'testUrl2'}})
    expect(showUrl.calledOnce).toBe(true)
   })
  })

   it('ComponentDidMount', () => {
     wrapper = shallow(<App/>
     expect(showUrl.calledOnce).toBe(true)
   })


   

