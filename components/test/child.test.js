import React from 'react'
import { render, cleanup  } from '@testing-library/react-native';

import Child from '../Child'

afterEach(cleanup); 

describe('Child component', () => {
    it('should render', () => {
        const sampleChild = {
            name: 'Ben',
            grade: 'Grade 4'
        }
        const {getAllByText, getByText} = render(<Child name={sampleChild.name} grade={sampleChild.grade} />)
         const name = getByText(sampleChild.name)
         const grade = getByText(sampleChild.grade)

         expect(name).toBeTruthy()
         expect(grade).toBeTruthy()
    })
})