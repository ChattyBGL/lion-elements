import { storiesOf, html } from "@open-wc/demoing-storybook";
import '../ing-wrapper.js';

storiesOf('Demo|Communication & Events', module)
.add('Wrapper to Child',
  () => html`
    <ing-wrapper></ing-wrapper>
  `);