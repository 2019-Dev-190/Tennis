import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FirstPlayer from './components/firstPlayer/firstPlayer';
import SecondPlayer from './components/secondPlayer/secondPlayer';
import ScoreBoard from './components/scoreBoard/scoreBoard';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


describe('App', () => {
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

  it('handle second player first ball call "updateScore" prop on button click', () => {
    const updateScore = jest.fn();
    const button = shallow((<SecondPlayer updateScore={updateScore} />));
    button.find('.player2').props().onClick();
    expect(updateScore).toHaveBeenCalled();
    expect(updateScore).toHaveBeenCalledTimes(1);
  });

  it('handle the win scenario', () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, 'won'];
    const button = shallow((<FirstPlayer updateScore={updateScore} />));
    var score = shallow((<ScoreBoard />));
    var status = 0
    points.map((data, id) => {
      if (id > 0) {
        button.find('.player1').props().onClick()
        status = points[id]
      }
    })
    status = status == 'won' ? 1 : 0
    expect(updateScore).toHaveBeenCalledTimes(4)
    score.setProps({ firstPlayer: status });
    expect(score.props().children[1].props.children[1].props.children).toEqual(1);
  });

  it('handle the deuce scenario', () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, 'won'];
    var player1Points = 40, player2Points = 40

    var score = shallow((<ScoreBoard />));
    const button = shallow((<FirstPlayer updateScore={updateScore} />));
    score.setProps({ firstPlayer: player1Points, secondPlayer: player2Points });

    button.find('.player1').props().onClick()
    expect(updateScore).toHaveBeenCalledTimes(1)
    score.setProps({ firstPlayer: 11, secondPlayer: player2Points });
  });

  it('handle the advantage scenario', () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, 'won'];
    var player1Points = 40, player2Points = 40

    var score = shallow((<ScoreBoard />));
    const button = shallow((<FirstPlayer updateScore={updateScore} />));
    score.setProps({ firstPlayer: player1Points, secondPlayer: player2Points });

    button.find('.player1').props().onClick()
    expect(updateScore).toHaveBeenCalledTimes(1)
    score.setProps({ firstPlayer: 11, secondPlayer: player2Points });

    expect(score.props().children[1].props.children[1].props.children).toEqual(11);
    button.find('.player1').props().onClick()
    expect(updateScore).toHaveBeenCalledTimes(2)
    score.setProps({ firstPlayer: 1, secondPlayer: player2Points });

    expect(score.props().children[1].props.children[1].props.children).toEqual(1);
  });

  it('resets the game', () => {
    const firstPlayer = 0;
    const secondPlayer = 0;
    const rendered = renderer.create(
        <ScoreBoard firstPlayer={firstPlayer} secondPlayer={secondPlayer}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});

});
