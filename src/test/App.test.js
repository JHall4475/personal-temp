import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import SubmitButton from '../components/shared/SubmitButton';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders', () => {
    expect(wrapper).toBeDefined()
  })

  it('check the state', () => {
   // wrapper.state()
   // wrapper.setState({name: "Sam"})
   // wrapper.setProps({title: "i dont knoow"})
  })

  describe('handleInputChange', () => {
    it('setState after e.target.value', () => {
      wrapper.instance().handleInputChange({target: {value: 'huy'}})
      expect(wrapper.state().input).toEqual('huy')
    })
  })
  
})


describe('<SubmitButton />', () => {
  const child = shallow(<SubmitButton title="huy here"/>);

  it('renders', () => {
    expect(child).toBeDefined()
  })

  // it('check the prop', () => {
  //   expect(child.props()).toEqual('click here')
  // })

})



