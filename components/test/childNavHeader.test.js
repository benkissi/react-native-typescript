import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import {Text} from 'react-native';

import ChildNaveHeader from '../ChildNavHeader';

afterEach(cleanup);

const Left = () => {
  return <Text>Left</Text>;
};

const Right = () => {
  return <Text>Right</Text>;
};

describe('Child Nav Header', () => {
  it('should render', () => {
    const {getByText} = render(
      <ChildNaveHeader
        title="Child Details"
        leftButton={<Left/>}
        rightButton={<Right/>}
        childName="Ben Kissi"
        headerImage={false}
      />,
    );

    const title = getByText('Child Details');
    expect(title).toBeTruthy();
  });
});
