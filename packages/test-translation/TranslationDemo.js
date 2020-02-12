//import '@lion/input/lion-input.js';
import '@webcomponents/webcomponentsjs'
import { localize ,LocalizeMixin} from '@lion/localize';
import {LitElement,html} from '@lion/core'
//localize.locale='es-ES'


// localize.loadNamespace({
// 'hello-world': locale => {
// return import(`./translations/${locale}.js`);

// // Hello John!
// },
// });
// debugger 
// setTimeout(() => {
//     let msg=localize.msg('hello-world:greeting', { name: 'John' });

// alert(msg);
// }, 100);

class TranslationDemo extends LocalizeMixin(LitElement) {
  constructor(){
    super()
  }
  connectedCallback(){
    super.connectedCallback()
   localize.locale=this.locale
  //alert(this.locale)
  }
  static get properties(){
    return {
      locale:{type:String,value:'en-GB'}
    }
  }
    static get localizeNamespaces() {
      // using an explicit loader function
      return [
        { 'my-hello-component':
        locale => 
            
            import(`./translations/${locale}.js`) 
        },
        ...super.localizeNamespaces,
      ];
  
      // using a preconfigured loader function
      return ['my-hello-component', ...super.localizeNamespaces];
    }
  
    static get waitForLocalizeNamespaces() {
      // return false to unblock the rendering till the data are loaded
      return true;
    }
  
    render() {
      debugger
      return html`
        <!-- use this.msgLit() here to inject data, e.g.: -->
        <span>${this.msgLit('my-hello-component:greeting')}</span>
      `;
    }
  
    onLocaleReady() {
      
      super.onLocaleReady();
      // life-cycle callback - when data are loaded for initial locale
      // (reaction to loaded namespaces defined in `localizeNamespaces`)
    }
  
    onLocaleChanged() {
      super.onLocaleChanged();
      // life-cycle callback - when data are loaded for new locale
      // (reaction to `localize.locale` change and namespaces loaded for it)
    }
  
    onLocaleUpdated() {
      super.onLocaleUpdated();
      // life-cycle callback - when localized content needs to be updated
      // (literally after `onLocaleReady` or `onLocaleChanged`)
      // most DOM updates should be done here with the help of `this.msgLit()` and cached id selectors
    }
  
    async inYourOwnMethod() {
      // before data are loaded or reloaded
      await this.localizeNamespacesLoaded;
      // after data are loaded or reloaded
    }
  }
  customElements.define('translation-demo',TranslationDemo)

