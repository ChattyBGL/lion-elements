// Import lit-html functions
import { html, render } from 'lit-html';
import { LitElement} from 'lit-element'; 
import '@lion/input/lion-input.js';
import '@lion/form';
import {MaxLength,MinMaxLength,Required} from '@lion/validate';
import {LocalizeMixin,localize} from '@lion/localize';

class MyApp extends LocalizeMixin(LitElement) { 

  static get properties() {
    return { myProp: String };
  }

  constructor(){
    super();
    this.myProp="Welcome";

    const submit = () => {
      const form = document.querySelector('#form2');
      if (!form.hasFeedbackFor.includes('error')) {
        console.log(form.serializeGroup());
        form.resetGroup();
      }
    };
    
  }

  render() {
    return   html
    `
    <h1>${this.myProp} to MyApp</h1>
    <lion-form id="form2">
      <form>
        
          <lion-input
            id="fName"
            name="firstName"
            label="First Name"
            .validators=${[new Required('', { getMessage: () =>'Please provide some value..'}), new MaxLength(15, { getMessage: () => 'Max 15 Char please...' })]}
          >
          </lion-input>
          <lion-input
            id="lName"
            name="lastName"
            label="Last Name"
            .validators=${[new Required('', { getMessage: () =>'Please provide some value..'}), new MaxLength(15, { getMessage: () => 'Max 15 Char please...' })]}
          >
          </lion-input>
          <br>
          
          <button type="button" @click="${this.handleClick}">
            Submit
          </button>
      </form>
</lion-form>
    `;
  }

  handleClick(e) {
        
    if(this.shadowRoot.getElementById('fName').value == '')
    {
        window.alert('Please enter First name');
    }
    else if(this.shadowRoot.getElementById('lName').value == ''){
        window.alert('Please enter Last name');
    }
    else{
      alert(`Submitted First Name: ${this.shadowRoot.querySelector('#fName').value} and Last Name: ${this.shadowRoot.querySelector('#lName').value}`)
    }

    
  }
  
}

customElements.define('my-app', MyApp); 