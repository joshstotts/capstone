import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable} from 'react-native';
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
    backgroundColor: 'white',
  },
  header: {
    fontSize: 25,
    marginTop: 20,
    color: 'white',
    fontWeight: '800',
  },
  button: {
    margin: 20,
    backgroundColor: 'lightgreen',
    height: 30,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  homeButton: {
    margin: 20,
    backgroundColor: 'lightgreen',
    height: 30,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  unwatched: {
    fontSize: 30,
    color: 'white'
  },
  titleWatch: {
    fontSize: 50,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'white',
    margin: -13,
    paddingRight: 78
  },
  titleList: {
    fontSize: 50,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'white',
    margin: -14,
    paddingLeft: 110
  }
});

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      <Text style={styles.titleWatch}>Watch</Text>
      <Text style={styles.titleList}>List</Text>
      <Pressable
        style={styles.homeButton}
        onPress={() => navigation.navigate('Add Movie')}
      ><Text>Add a Movie</Text></Pressable>
      {/* <Button
      title="Movies I've Watched"
      onPress={() => navigation.navigate('Watched')} 
      /> */}
      
    </View>
  );
}

const NewMovie = () => {
  const [text, onChangeText] = React.useState(null)
  // const [service, onChangeService] = React.useState(null)

  const [unwatched, setunwatched] = React.useState([])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',}}>
      <Text style={styles.header}>Movie Title</Text>
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
      <Pressable
        style={styles.button}
        onPress={() => {setunwatched([...unwatched, text]); console.log(unwatched)}}>
        <Text>ADD</Text>
      </Pressable>
      <Text style={styles.unwatched}>{unwatched} </Text>
    </SafeAreaView>
  )
}



function AddMovie({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'black'}}>
      {/* <Pressable style={styles.button} onPress={() => navigation.navigate('Watch List')} >
        <Text>Watch List</Text>
      </Pressable> */}
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
