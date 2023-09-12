import { View, Text, TouchableOpacity, FlatList, TouchableOpacityBase } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { TabStackParamList } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useCustomerOrders from '../hooks/useCustomerOrders'
import DeliveryCard from '../components/DeliveryCard'

type ModalScreenNavigationProp = CompositeNavigationProp<
   BottomTabNavigationProp<TabStackParamList>, 
   NativeStackNavigationProp<RootStackParamList, "MyModal">>

   type  ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>()
    const {params:{name, userId}} = useRoute<ModalScreenRouteProp>();

    const {loading, error, orders} = useCustomerOrders(userId);
  return (
    <View >
       
       <TouchableOpacity
       
       style={tw("absolute right-5 top-5 z-10")}>
        <Icon name="closecircle" type='antdesign' />
        </TouchableOpacity>
        

      <View style={{margin: 15}}>
        <View style={[tw("py-5 border-b"),{borderColor: "#59C1CC"}] }>
            <Text style={[tw("text-center text-xl font-bold"), {color:"#59C1CC"}]}
            >{name}</Text>
            <Text style={[tw("text-center italic text-sm")]}>deliveries</Text>
        </View>
      </View>


      <FlatList
      contentContainerStyle={{paddingBottom: 200}}
      data={orders}
      renderItem={({item:order}) => <DeliveryCard order={order}/>}
      />
    </View>
    

  )
}

export default ModalScreen