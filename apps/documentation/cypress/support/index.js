import 'cypress-plugin-snapshots/commands';
import '@cypress/react';
import 'cypress-axe';
import { setGlobalConfig } from '@storybook/testing-react';
import * as sbPreview from '../../.storybook/preview';

setGlobalConfig(sbPreview);
