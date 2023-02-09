import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/Home';
import SettingScreen from '../features/home/Setting';
const Tab = createBottomTabNavigator();

 
function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarLabel: 'SettingScreen',
            tabBarBadge: 3,
          }}
        />
       
      </Tab.Navigator>
    );
  }
export default MyTabs;