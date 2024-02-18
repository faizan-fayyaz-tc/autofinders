/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
// MainStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SellNowPopup from './sellNowPopup';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './profile';
import Welcome from './welcome';
// import More from './more';
// import MyGarage from './myGarage';
import homeCarInspection from './homeCarInspection';
import home from './home'
import homeBuyCarForMe from './homeBuyCarForMe';
import BasicInfoCarInspection from './basicInfoCarInspection';
import BookExpertVisitCarInspection from './bookExpertVisitCarInspection';
import CheckoutCarInspection from './checkoutCarInspection';
// import ManagedByAutoFinder from './components/managedByAutoFinder';
// import sellNowChoosePlan from './sellNowChoosePlan';
// import HomeSellItForMe from './homeSellItForMe';
import HomeFreeAds from './homeFreeAds';
import FreeAdsPostService from './freeAdsPostService';
import HomeListItForYou from './homeListItForYou';
// import SellerCarDetail from './sellerCarDetail';
// import MyAds from './myAds';
// import ActiveAds from './activeAds';
// import PendingAds from './pendingAds';
// import RemovedAds from './removedAds';
// import SellerProfile from './sellerProfile';
import HomePremiumAds from './homePremiumAds';
import HomeRentACar from './homeRentACar';
import RentPostService from './rentPostService';
import FilterSearch from './filterSearch';
import PremiumAdsPostService from './premiumAdsPostService';
import BasicInfoBuyCarForMe from './basicInfoBuyCarForMe';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={home} />
      <Stack.Screen
        name="SellNowPopup"
        component={SellNowPopup}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="homeCarInspection" component={homeCarInspection} />
      {/* <Stack.Screen name="more" component={More} /> */}
      <Stack.Screen name="profile" component={Profile} />
      {/* <Stack.Screen name="MyGarage" component={MyGarage} /> */}
      <Stack.Screen name="homeBuyCarForMe" component={homeBuyCarForMe} />
      <Stack.Screen name="basicInfoCarInspection" component={BasicInfoCarInspection} />
      <Stack.Screen name="bookExpertVisitCarInspection" component={BookExpertVisitCarInspection} />
      <Stack.Screen name="checkoutCarInspection" component={CheckoutCarInspection} />
      {/* <Stack.Screen name="managedByAutoFinder" component={ManagedByAutoFinder} />
      <Stack.Screen name="sellNowChoosePlan" component={sellNowChoosePlan} />
      <Stack.Screen name="homeSellItForMe" component={HomeSellItForMe} /> */}
      <Stack.Screen name="homeFreeAds" component={HomeFreeAds} />
      <Stack.Screen name="freeAdsPostService" component={FreeAdsPostService} />
      <Stack.Screen name="premiumAdsPostService" component={PremiumAdsPostService} />
      <Stack.Screen name="homeListItForYou" component={HomeListItForYou} />
      {/* <Stack.Screen name="myAds" component={MyAds} />
      <Stack.Screen name="activeAds" component={ActiveAds} />
      <Stack.Screen name="pendingAds" component={PendingAds} />
      <Stack.Screen name="removedAds" component={RemovedAds} />
      <Stack.Screen name="sellerCarDetail" component={SellerCarDetail} />
      <Stack.Screen name="sellerProfile" component={SellerProfile} /> */}
      <Stack.Screen name="homePremiumAds" component={HomePremiumAds} />
      <Stack.Screen name="homeRentACar" component={HomeRentACar} />
      <Stack.Screen name="rentPostService" component={RentPostService} />
      <Stack.Screen name="filterSearch" component={FilterSearch} />
      <Stack.Screen name="basicInfoBuyCarForMe" component={BasicInfoBuyCarForMe} />
    </Stack.Navigator>

  );
};

export default AppNavigator;



