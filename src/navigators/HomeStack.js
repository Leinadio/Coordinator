import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

export const HomeStack = createStackNavigator({
  Home: Screens.Home,
  SelectRate: Screens.SelectRate,
  Member: Screens.Member,
});
