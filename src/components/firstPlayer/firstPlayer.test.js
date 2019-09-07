import React from 'react';
import FirstPlayer from './FirstPlayer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FirstPlayer', () => {

    it('FirstPlayer should render correctly with no props', () => {
        const wrapper = shallow(<FirstPlayer />)
        const text = wrapper.find('div.playerHeading').text();
        expect(text).toEqual('Player1');
    });

});