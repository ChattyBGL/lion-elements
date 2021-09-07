import { LitElement , html, css } from "@lion/core";
import '@lion/checkbox-group/lion-checkbox-group.js'; 

export class LionCheckbox extends LitElement {

  constructor() {
    super();

  }
 
  render() {
    return html`
      
      <lion-checkbox-group name="scientists[]" label="Favorite scientists">
        <lion-checkbox label="Archimedes" .choiceValue=${'Archimedes'}></lion-checkbox>
        <lion-checkbox label="Francis Bacon" .choiceValue=${'Francis Bacon'}xx  ></lion-checkbox>
        <lion-checkbox label="Marie Curie" .choiceValue=${'Marie Curie'}></lion-checkbox>
      </lion-checkbox-group> 
      `;
  }

  
}

customElements.define('lion-checkbox', LionCheckbox);
