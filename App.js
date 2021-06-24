
import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';


const App = () => {
  console.log('========hurrah========')
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};



export default App;
// import 'react-native-gesture-handler';
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';


// import AddCategory from './src/routes/AddCategory';
// import AddDua from './src/routes/AddDua';
// import Cure from './src/routes/Cure';
// import CureDetail from './src/routes/CureDetail';

// const CureStack = createStackNavigator()

// const CureStackScreen = () => {
//   return <CureStack.Navigator>
//     <CureStack.Screen name={'cure'} component={Cure}></CureStack.Screen>
//     <CureStack.Screen name={'cureDetail'} component={CureDetail}></CureStack.Screen>
//   </CureStack.Navigator>
// }

// const App = () => {

//   const DrawerStack = createDrawerNavigator()
//   return (
//     <NavigationContainer>
//       <DrawerStack.Navigator>
//         <DrawerStack.Screen name={'addCategory'} component={AddCategory}></DrawerStack.Screen>
//         <DrawerStack.Screen name={'addDua'} component={AddDua}></DrawerStack.Screen>
//         <DrawerStack.Screen name={'cure'} component={CureStackScreen}></DrawerStack.Screen>
//       </DrawerStack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App
