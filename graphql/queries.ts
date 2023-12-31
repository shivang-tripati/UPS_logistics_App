// Single component
import { gql} from '@apollo/client';


 export const GET_CUSTOMERS = gql`  
 query getTrackingItems {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }`;

 export const GET_ORDERS = gql` 
   query getOrders {
    getOrders {
      value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            quantity
            price
            name
            item_id
          }
        }
      }
    }
  }`;