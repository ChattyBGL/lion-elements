
import { expect, fixture } from "@open-wc/testing";
import { html } from '@lion/core';
import sinon from "sinon";

import '../../packages/lion-demo-input/LionDemoInput.js';

describe('lion-demo-tests', () => {

  let element;

  beforeEach(async () => {
    element = await fixture(
      html`
        <lion-demo-input></lion-demo-input>
      `,
    );
  });

  it('basic test', () => {
    expect(element.defaultValue).to.be.equal('Hello World!!');
  });

  describe('callMe() tests', () => {
    it('when flag is true, invokes getCall method', () => {
      let getCallSpy = sinon.spy(element, 'getCall');

      element.callMe(true);

      sinon.assert.called(getCallSpy);

      // element.getCall().restore();
    });

    it('when flag is false, invokes setCall method and sets flag= "xyz"', () => {
      let setCallSpy = sinon.spy(element, 'setCall');

      element.callMe(false);

      sinon.assert.calledWith(setCallSpy, 'xyz');
      expect(element.flat).to.be.equal('xyz');
    });

    it('when stubCheck called, should return "xyz"', () => {
      let getCallStub = sinon.stub(element, 'getCall').returns("xyz");
      const returnValue = element.stubCheck();

      sinon.assert.calledWith(getCallStub, 'abc');
      expect(returnValue).to.be.equal('xyz');
    });
  });
});