import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Element from '../src/components/Element';
import {expect} from 'chai';

describe('Element', () => {
  it('renders li element', () => {
    const element = 'foobar';
    const rmElem = () => {};

    const component = renderIntoDocument(
      <Element element={element}
              removeElement={rmElem} id="123"/>
    );

    let liElem = scryRenderedDOMComponentsWithTag(component, 'li')[0];
    expect(liElem.textContent).to.equal('foobar');
  });

});
