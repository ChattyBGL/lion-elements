import { LitElement, html } from "@lion/core";

class Page1a extends LitElement {

  render() {
    return html`
    <div class="button-area"> <button @click="${this.changePage}">Change Page</button></div>
    `;
  }

  changePage(event) {
    // console.log({event});
    this.dispatchEvent(new CustomEvent('page-change', { bubbles: true, composed: true, detail: 'page-2' }));
  }

}

customElements.define('page-1a', Page1a);