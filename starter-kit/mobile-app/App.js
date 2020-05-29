import 'react-native-gesture-handler';
import * as React from 'react';

import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import SearchResources from './src/screens/resources-search';
import AddFoodResource from './src/screens/resource-add-food';
import AddResourceOptions from './src/screens/resource-add-options';
import AddRequestOptions from './src/screens/requests-add-options';
import AddMedicalResource from './src/screens/resource-add-medical-supplies';
import AddSleepingQuartersResource from './src/screens/resource-add-sleeping-quarters';
import AddMoneyResource from './src/screens/resource-add-money';
import AddEntertainmentResource from './src/screens/resource-add-entertainment-devices';
import MyRequests from './src/screens/requests-my';
import AddFoodRequest from './src/screens/requests-add-food';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';
import Map from './src/screens/map';

import { HomeIcon, DonateIcon, SearchIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ResourcesStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Chat')}
        title='Chat '
      />
    )
  });
};

const DonationsStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Add Donation Options')}
        title='Add '
      />
    )
  });
};


const RequestsStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Add Request Options')}
        title='Add '
      />
    )
  });
};


const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    <Tab.Screen
      name='Donate'
      component={DonateStackLayout}
      options={{
        tabBarIcon: ({color}) => (<DonateIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Request'
      component={RequestStackLayout}
      options={{
        tabBarIcon: ({color}) => (<DonateIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const DonateStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='My Donations' component={MyResources} options={DonationsStackOptions} />
    <Stack.Screen name='Add Donation Options' component={AddResourceOptions} />
    <Stack.Screen name='Add Food Donation' component={AddFoodResource} />
    <Stack.Screen name='Add Money Donation' component={AddMoneyResource} />
    <Stack.Screen name='Add Medical Donation' component={AddMedicalResource} />
    <Stack.Screen name='Add Sleeping Quarters Donation' component={AddSleepingQuartersResource} />
    <Stack.Screen name='Add Entertainment Devices Donation' component={AddEntertainmentResource} />
    <Stack.Screen name='Edit Donation' component={EditResource} />
  </Stack.Navigator>
);
            
const RequestStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='My Requests' component={MyRequests} options={RequestsStackOptions} />
  <Stack.Screen name='Add Request Options' component={AddRequestOptions} />
  <Stack.Screen name='Add Food Request' component={AddFoodRequest} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Resources' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
