import React from 'react';
import { View, Text } from 'react-native';

export default function index() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <Text>Pushhh</Text>
      <Text>{counter}</Text>
      <Button title="Press me" onPress={incrementCounter} />
    </View>
  );
}
