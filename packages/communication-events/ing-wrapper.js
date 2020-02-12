import { LitElement, html } from 'lit-element';

import './page-1.js';
import './page-2.js';
import './page-3.js';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class IngWrapper extends LitElement {
  static get properties() {
    return {
      page: { type: String, reflect: true, attribute: true },
      time: String,
    };
  }


  constructor() {
    super();

    this.page = 'page-1';
    this.time = new Date().toLocaleString();
  }

  /**
    * Called every time the element is inserted into the DOM. Useful for
    * running setup code, such as fetching resources or rendering.
    * Generally, you should try to delay work until this time.
    */
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('page-change', (event) => {
      console.log({ pageChange: event });
      this.page = event.detail;
    });


  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {

    let showPage;
    switch (this.page) {
      case 'page-1':
        showPage = html`
          <page-1 title id="page-1Id" .data=${this.time}></page-1>
        `;
        break;
      case 'page-2':
        showPage = html`
          <page-2 id="page-2Id" .data=${this.time}></page-2>
        `;
        break;
      case 'page-3':
        showPage = html`
           <page-3 id="page-3Id" .data=${this.time}></page-3>
        `;
        break;

      default:
        showPage = html`
         <h1>Page Default</h1>
        `;
        break;
    }
    return html`
      ${showPage}
      <br/><br/>
    <div style="text-align: center"> <button @click="${this.changeTime}">Change Data</button></div>
  `;
  }

  changeTime() {
    this.time = new Date().toLocaleString();
    // this.shadowRoot.querySelector(`#${this.page}Id`).fancyAJAX();
  }


}

customElements.define('ing-wrapper', IngWrapper);