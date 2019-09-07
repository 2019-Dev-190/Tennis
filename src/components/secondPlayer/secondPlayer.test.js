import React from 'react';
import SecondPlayer from './SecondPlayer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SecondPlayer', () => {

    it('SecondPlayer should render correctly with no props', () => {
        const wrapper = shallow(<SecondPlayer />)
        const text = wrapper.find('div.playerHeading').text();
        expect(text).toEqual('Player2');
    });


});