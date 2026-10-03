import Constants from'expo-constants';
import { Text, StyleSheet,View } from "react-native";

const styles=StyleSheet.create({
        container:{
            marginTop:Constants.statusBarHeight,
            flex:1,
        }
    })
const Main = () => {
  return (
    <View style={styles.container}>
      <Text>My Project</Text>
    </View>
  );
};

export default Main;
