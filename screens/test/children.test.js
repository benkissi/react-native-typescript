import React from 'react';
import {render, cleanup, fireEvent, waitFor} from '@testing-library/react-native';

import Children from '../Children';

afterEach(cleanup)

describe('Children Screen', () => {
    it('should render', () => {
        const {getByText}  = render(<Children />)
        const  section= getByText('My children')

        expect(section).toBeTruthy()
    })
})