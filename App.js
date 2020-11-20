import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import Exercise1 from './src/screens/Exercise1';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Compo:ComponentsScreen,
    Exercise: Exercise1,
    List:ListScreen,
    Image:ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
  