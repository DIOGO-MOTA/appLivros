import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../pages/Dashboard';
import { BookDetails } from '../pages/BookDetails';
import{ Category} from '../pages/Category';

const { Navigator,Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="bookDetails" component={BookDetails} />
      <Screen name="category" component={Category} />
    </Navigator >
  )
};

