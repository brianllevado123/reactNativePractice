import React, {useState} from 'react';
import {Button, StyleSheet, Text, View,SafeAreaView} from 'react-native';

const MyApp = () => {

  const [name, setName] = useState('Click the button below:');
  let [click, setClick] = useState(0);
  const onClickHandler = () => {
    if (name === 'Click the button below:'){
      setName('Welcome to');
    } else {
      setName('Click button below:');
    }
    setClick(click+1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customText}>{name}</Text>
      <Button
        onPress={onClickHandler}
        color="#206ab4"
        title="Devtac"
      />
      <Text style={styles.clickCounter}>{click}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63c2ea',
    borderWidth: 10,
    borderColor: '#206ab4',
  },
  customText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  clickCounter: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default MyApp;
