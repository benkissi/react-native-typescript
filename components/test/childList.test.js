import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import ChildList from '../ChildList';
import ChildModel from '../../utils/child.model';

afterEach(cleanup);

const sampleChild = {
  id: '123!@#',
  parents: ['123'],
  guardians: ['34j'],
  firstName: 'Jason',
  lastName: 'Debra',
  middleName: 'Kissi',
  grade: 'Grade 4',
  image:
    'https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk',
  delegated: false,
};

const handlePress = jest.fn();

describe('Child component', () => {
  it('should render', () => {
    const child = new ChildModel(
      sampleChild.id,
      sampleChild.firstName,
      sampleChild.lastName,
      sampleChild.middleName,
      sampleChild.delegated,
      sampleChild.grade,
      sampleChild.image,
    );
    const {getByText} = render(
      <ChildList
        title="My children"
        onChildPress={handlePress}
        children={[child]}
      />,
    );
    const name = getByText(child.getFullName());

    expect(name).toBeTruthy();
  });
});

it('should fire click event', () => {
  const child = new ChildModel(
    sampleChild.id,
    sampleChild.firstName,
    sampleChild.lastName,
    sampleChild.middleName,
    sampleChild.delegated,
    sampleChild.grade,
    sampleChild.image,
  );

  const {getByText} = render(
    <ChildList
      title="My children"
      onChildPress={handlePress}
      children={[child]}
    />,
  );
  const name = getByText(child.getFullName());
  fireEvent.press(name);
  expect(handlePress).toHaveBeenCalled();
});
