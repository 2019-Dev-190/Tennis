import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FirstPlayer from './components/firstPlayer/firstPlayer';

configure({ adapter: new Adapter() });


describe('App', ()=>{
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handle first player first ball call "updateScore" prop on button click', () => {
  const updateScore = jest.fn();
  const button = shallow((<FirstPlayer updateScore={updateScore} />));
  button.find('.player1').props().onClick();
  expect(updateScore).toHaveBeenCalled();
  expect(updateScore).toHaveBeenCalledTimes(1);
});

});
