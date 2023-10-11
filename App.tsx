import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyHeader = () => {
  return (
    <SafeAreaView style={{ height: 200, backgroundColor: "#f4511e" }}>
     <Text>Header</Text>
    </SafeAreaView>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <MyHeader />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
