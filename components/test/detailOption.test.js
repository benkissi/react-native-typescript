import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import DetailOption from '../DetailOption';

afterEach(cleanup);
const handlePress = jest.fn();

describe('Detail Option', () => {
    it('should render', () => {
        const option= {id: 'w32', title: 'Schedule', description: 'View schedule and time table'};
        const {getByText} = render(<DetailOption option={option} onTap={handlePress}/>)

        const title = getByText('Schedule')
        expect(title).toBeTruthy()
    })

    it('should fire ontap function when pressed', () => {
        const option= {id: 'w32', title: 'Schedule', description: 'View schedule and time table'};
        const {getByText} = render(<DetailOption option={option} onTap={handlePress}/>)

        const title = getByText('Schedule')

        fireEvent.press(title);
        expect(handlePress).toHaveBeenCalled();
    })
})