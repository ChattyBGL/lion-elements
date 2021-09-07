import { LitElement , html, css } from "@lion/core";

export class MyElement extends LitElement {

    static get properties() {
      return {
        name: {type: String}
      }
    }
  
    constructor() {
      super();
      this.name = 'Dhara';

    }

    render() {
        return html`
          <p class="space">User Name:: ${this.name}</p>
          
        `;
      }
    
   
  }

  customElements.define('my-element', MyElement);