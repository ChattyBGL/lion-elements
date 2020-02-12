import { storiesOf, html } from "@open-wc/demoing-storybook";
import '../TranslationDemo.js'

storiesOf('Demo|Lion elements', module)
.add('Test Translation',
  () => html`<translation-demo locale="es-ES"></translation-demo>`);