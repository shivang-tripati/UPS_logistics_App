import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { Card, Icon } from '@rneui/themed'
import { Divider, color } from '@rneui/base'
import MapView from 'react-native-maps'
import { MapMarker } from 'react-native-maps/lib/MapMarker'

type Props = {
    order:Order;
    fullWidth?: boolean;
}
const DeliveryCard = ({order, fullWidth}: Props) => {
  const tw = useTailwind();
  return (

    <Card containerStyle={[
      tw(`${fullWidth ? "rounded-none m-0" : "rounded-lg"} my-2`),
    {
      backgroundColor: fullWidth? "#EB6A7C":"#59C1CC",
      padding:0,
      paddingTop:16,
      shadowColor: "balck",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }
    ]}>

      <View style={fullWidth && {height:"100%"}}>
      <Icon name='box' type="entypo" size={50} color="white" />
      <View style={tw("items-start p-5 -mt-3")}>
      <View style={tw("mx-auto")}>  
      <Text style={[{color: 'white'}, tw("text-center uppercase font-bold")]}>
        {order.carrier} - {order.trackingId}
      </Text>
      <Text style={[tw("text-center font-bold"), {color: "white", fontSize:18}]} >
        Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
      </Text> 
      <Divider color='white'/>   
      </View>  

      <View style={[tw("mx-auto"), {margin: 12}]}>
        <Text style={[tw("text-center font-bold"),{color:"white", fontSize:18}]} >
          Address
          </Text>
        <Text style={[tw("text-sm text-center"), {color:"white"}]} >
          {order.Address}, {order.City}</Text>

        <Text style={[tw("text-sm text-center italic"), {color:"white"}]}>
          Shipping Cost: ${order.shippingCost}
          </Text>
      </View>
    </View>
    <Divider color='white'/>
    <View style={tw("p-5")}>
    {order.trackingItems.items.map((item) => (
      <View style={tw("flex-row justify-between items-center")}>
          <Text style={[tw("text-sm italic"), {color:"white"}]}  >
            {item.name}</Text>
          <Text style={[tw(""), {color:"white", fontSize:18}]} >x {item.quantity}</Text>
        </View>
    ))}
    </View>


    <MapView initialRegion={
      {latitude: order.Lat,
       longitude:order.Lng,
       latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      }
      } 
      style={[tw("w-full"),{flexGrow:1},!fullWidth && {height:200}]}
      >
      {order.Lat && order.Lng && (
        <MapMarker 
          coordinate={{
            latitude: order.Lat,
            longitude: order.Lng
          }}
          title="Delivery Loaction"
          identifier="destination"
          description={order.Address}
        />
      )}
       
    </MapView>
    </View>
    
    </Card>

    
  )
}

export default DeliveryCard