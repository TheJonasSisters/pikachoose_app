import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFoundPage from "../../javascript/components/components/NotFoundPage"


Enzyme.configure({ adapter: new Adapter() });

it('Not Found Page renders without crashing', () => {
  shallow(<NotFoundPage/>)
})

