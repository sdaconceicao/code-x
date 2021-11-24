import 'cypress-plugin-snapshots/commands';
import '@cypress/react';
import 'cypress-axe';
import { setGlobalConfig } from '@storybook/testing-react';
import * as sbPreview from '../../apps/documentation/.storybook/preview';

setGlobalConfig(sbPreview);
