import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
        { props.title }
      </Text>
    </TouchableOpacity>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello React Native!
      </Text>

      <Button title="Touch 1" />
      <Button title="Touch 2" />
      <Button title="Touch 3" />

      <StatusBar style="auto" backgroundColor="lightgray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "salmon"
  }
});
