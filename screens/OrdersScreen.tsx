import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Image } from '@rneui/base'
import { useTailwind } from 'tailwind-rn'
import useOrders from '../hooks/useOrders'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/RootNavigator'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '@rneui/themed';
import OrderCard from '../components/Ordercard'


export type OrdersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Orders">, 
NativeStackNavigationProp<RootStackParamList>
>;
const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {loading, error, orders} = useOrders()
  const [ascending, setAscending] = useState<boolean>(false) 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel:({focused, color}) =>
      (<Text style={{color:focused? "#EB6A7C":color, fontSize:10}}>Orders
      </Text>)
    })
  },[])
  return (
    <ScrollView style={{backgroundColor: "#EB6A7C"}} >
      <Image
      source={{uri: "https://links.papareact.com/m51"}}
      containerStyle={tw('w-full h-64')}
      PlaceholderContent={<ActivityIndicator/>}
      />  

      <View style={{padding:5, marginHorizontal:12}} >
        <Button color="pink" 
        
        titleStyle={{color: 'gray', fontWeight: "400"}} 
        onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Showing: Oldest First": "Showing: Most Recent First"}
        </Button>
        {orders?.sort((a,b) => {
          if(ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1: -1;
          } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1: -1;
          }
        }).map(order => (<OrderCard key={order.trackingId} item={order} />))}
      </View>
    </ScrollView>
  )
}

export default OrderScreen