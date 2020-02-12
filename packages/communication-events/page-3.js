import { LitElement, html, css } from "@lion/core";

import pageStyle from './style.js';

class Page3 extends LitElement {

  /**
    * Object describing property-related metadata used by Polymer features
    */
   static get properties() {
    return {
      data: String,
    };
  }

  static get styles() {
    return [
      pageStyle,
      css`
        .page-body {
          background-color: #076eb6;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="page-body">
        <p> Hello I am page 3 </p>
        <h3>${this.data}</h3>
        <div style="text-align: center;background: white"> <button @click="${this.changePage}">Change Page</button></div>
      </div>
    `;
  }

  changePage(event) {
    // console.log({event});
    this.dispatchEvent(new CustomEvent('page-change',{ bubbles:true, composed: true, detail: 'page-1'}));
  }
}

customElements.define('page-3', Page3);