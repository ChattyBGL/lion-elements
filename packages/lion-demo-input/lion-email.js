import { LitElement , html, css } from "@lion/core";
import '@lion/input-email/lion-input-email.js'

export class LionEmail extends LitElement {

    constructor() {
      super();
  
    }
    static get properties() {
      return {
    
      };
    }
  
    render() {
      return html`
       <lion-input-email label="Email" name="email"></lion-input-email> 

      `;
    }
  
}
  
  customElements.define('lion-email', LionEmail);
  
