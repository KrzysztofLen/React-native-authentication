import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen } from '@screens/LoginScreen';
import { RegisterScreen } from '@screens/RegisterScreen';
import { DashboardScreen } from '@screens/DashboardScreen';
import { ResolveAuthScreen } from '@screens/ResolveAuthScreen';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: 'Register',
    }),
  },
});

const AppFlow = createStackNavigator({ AppFlow: DashboardScreen });

const AppNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    LoginFlow: StackNavigator,
    AppFlow,
  },
  {
    initialRouteName: 'LoginFlow',
  },
);

export default createAppContainer(AppNavigator);
