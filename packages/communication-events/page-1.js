import { LitElement, html, css } from "@lion/core";

import pageStyle from './style.js';

import './page-1a.js';


class Page1 extends LitElement {

  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
      data: String,
    };
  }

  /**
     * Called every time the element is inserted into the DOM. Useful for
     * running setup code, such as fetching resources or rendering.
     * Generally, you should try to delay work until this time.
     */
  connectedCallback() {
    super.connectedCallback();

    // this.addEventListener('page-change', (event) => {
    //   event.stopPropagation();
    //   console.log({ page1Change: event });
    //   // this.page = event.detail;
    // });

  }

  static get styles() {
    return [
      pageStyle,


      css`
        .page-body {
          background-color: #006058;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="page-body">
        <p> Hello I am page 1 </p>
        <h3>${this.data}</h3>

        <page-1a></page-1a>
      </div>
    `;
  }


}

customElements.define('page-1', Page1);