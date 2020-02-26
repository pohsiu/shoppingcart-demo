/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import {
  Typography,
} from '@material-ui/core';
import Item from './Item';

const setup = itemProps => {
  const component = shallow(
    <Item {...itemProps} />
  )

  return {
    item: component,
    itemCount: component.find(Typography),
  }
}

let fakeItemProps;

describe('Item component', () => {
  beforeEach(() => {
    fakeItemProps = {
      count: 1,
      name: "Checkien Momo",
      price: "10.50",
      hashId: "#4231648",
    };
  })
  it('should render count 10.50', () => {
    const { itemCount } = setup(fakeItemProps)
    expect(itemCount.text()).toEqual("10.50")
  })

});