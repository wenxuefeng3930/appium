import BaseDriver from '../../../lib';
import {baseDriverUnitTests} from '@appium/test-support';

baseDriverUnitTests(BaseDriver, {
  platformName: 'iOS',
  'appium:deviceName': 'Delorean',
});
