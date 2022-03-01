import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: 275,
    height: 40,
    borderRadius: 10,
    margin: 20,
    borderWidth: 2,
    padding: 10,
  },
  header: {
    fontSize: 25,
    marginTop: 20,
  },
  button: {
    marginTop: 40,
    fontSize: 40,
  },
  unwatched: {
    fontSize: 30,
  }
});

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Button
        title="Add a Movie"
        onPress={() => navigation.navigate('Add Movie')}
      />
      <Button
      title="Movies I've Watcehd"
      onPress={() => navigation.navigate('Watched')} 
      />
      
    </View>
  );
}

const NewMovie = () => {
  const [text, onChangeText] = React.useState(null)
  // const [service, onChangeService] = React.useState(null)

  const unwatched = []

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Text style={styles.header}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='enter the title'
      />
      {/* <Text style={styles.header}>Streaming On</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeService}
        value={service}
        placeholder='streaming service'
      /> */}
      <Button
        style={styles.button}
        title="ADD"
        onPress={() => (unwatched.push(text))}
      />
      <Text style={styles.unwatched}>{unwatched}</Text>
    </SafeAreaView>
  )
}



function AddMovie({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Button title="Watch List" onPress={() => navigation.navigate('Watch List')} />
      <NewMovie />
    </View>
  );
}

function WatchedMovies({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Button title="Add a Movie" onPress={() => navigation.navigate('Add Movie')} />
      <Button title="Watch List" onPress={() => navigation.navigate('Watch List')} />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Watch List">
          {props => <HomeScreen {...props} /> }
        </Stack.Screen>
        <Stack.Screen name="Add Movie">
          {props => <AddMovie {...props} /> }
        </Stack.Screen>
        <Stack.Screen name="Watched">
          {props => <WatchedMovies {...props} /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
