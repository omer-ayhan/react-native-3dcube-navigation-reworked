/**
 * @format
 */

import {AppRegistry} from 'react-native';
import CubeVertical from './components/CubeVertical';
import CubeHorizontal from './components/CubeHorizontal';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CubeHorizontal);
