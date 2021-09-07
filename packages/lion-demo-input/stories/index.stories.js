import { storiesOf, html } from "@open-wc/demoing-storybook";
import '../LionDemoInput.js'
// import '../LionCheckbox.js'
import '../lion-email.js' 
import '../my-element.js'

storiesOf('Demo|Lion elements', module)
.add('Lion Demo Input',
  () => html`
  <lion-demo-input></lion-demo-input>
  <lion-email></lion-email>
  <my-element></my-element> 
  
  `);     