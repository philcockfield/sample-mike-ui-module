import * as React from 'react';
import { storiesOf, host, IHostProps, Story, knobs } from 'storybook-host';

export { knobs } from 'storybook-host'


/**
 * Standard configuration when describing stories.
 */
export function describe(name: string, config: IHostProps): Story {
  return storiesOf(name, module)
    .addDecorator(knobs.withKnobs)
    .addDecorator(host(config));
}
