import {TailwindProvider} from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';   
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const client = new ApolloClient({
  uri: 'https://wenwu.stepzen.net/api/banking-rottweiler/__graphql',
  headers: {'Authorization':'apikey wenwu::stepzen.io+1000::8701f4a70b90a8369d5b91c52b6e9d1a866b67b971a946d7988ea105ebdd4b48'},
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    // @ts-ignore tailwind
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

