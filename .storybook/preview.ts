import type { Preview } from '@storybook/react';
import '../src/global.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // dismiss an accessibility rule or modify its settings
    // https://storybook.js.org/docs/react/writing-tests/accessibility-testing#global-a11y-configuration
  },
};

export default preview;
