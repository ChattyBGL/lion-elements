import { storiesOf, html } from "@open-wc/demoing-storybook";
import '../MyApp.js';

storiesOf('Demo|My App', module)
.add('Lion Demo My App',
  () => html`<my-app></my-app>`); 
  