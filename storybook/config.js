import { configure } from '@kadira/storybook';

function loadStories() {
  require('./stories/Form.story');
  require('./stories/Form.Field.story');
  require('./stories/Validation.story');
}

configure(loadStories, module);
