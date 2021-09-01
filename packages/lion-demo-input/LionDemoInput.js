import { LitElement , html, css } from "@lion/core";
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js'

export class LionDemoInput extends LitElement {

  constructor() {
    super();

    this.defaultValue = 'Hello World!!';
  }
  static get properties() {
    return {
      defaultValue: {
        type: String,
        reflect: true,
      }
    };
  }

  static get styles(){
    return css`
      .space {
        background: #FF6200;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <lion-input id="input" label="My First label" name="myName"></lion-input>
      <p class="space">Here is css:: ${this.defaultValue}</p>
      <lion-button
        class="button"
        @click="${()=> {this.formSubmitted()}}">Submit</lion-button>
    `;
  }

  formSubmitted() {
    console.log('Input value:::',this.shadowRoot.querySelector('lion-input').modelValue);
  }
}

customElements.define('lion-demo-input', LionDemoInput);
