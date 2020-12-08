import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import buildControls from "../../components/Burger/BuildControls/BuildControls";
import { BurgerBuilder } from "./BurgerBuilder";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BurgerBuilder onInitIngredients={() => {}} totalPrice={100} />
    );
  });
  it("should render <BuildControls /> element if receiving ingredients", () => {
    wrapper.setProps({ ingredients: { salad: 0 } });
    expect(wrapper.find(buildControls)).toHaveLength(1);
  });
});
