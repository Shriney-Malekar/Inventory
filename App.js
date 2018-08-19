import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddProduct')}
          title="Add Product"
          backgroundColor= 'powderblue'
          accessibilityLabel="Add Product"
        />
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddProduct')}
          title="Sell Product"
          backgroundColor= 'skyblue'
          accessibilityLabel="Sell Product"
        />
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddProduct')}
          title="View Report"
          backgroundColor= 'steelblue'
          accessibilityLabel="View Report"
        />
      </View>
    );
  }
}

class FormScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const Inventory = createStackNavigator(
  {
    Home: HomeScreen,
    AddProduct: FormScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  onPressViewReport = () => {
    return "hello";
  }
  render() {
    return <Inventory />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 50, 
    height: 50,
    padding: '1em'
  },
});
