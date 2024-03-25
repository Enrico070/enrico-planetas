import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cadastro from "../screens/Cadastro";
import Planetas from "../screens/Planetas";
import { planeta } from "../data/Profile";

import planetaRepositorio from "../models/PlanetaRepositorio";

const planetas = planetaRepositorio.getAll()



const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Planetas" component={Planetas} initialParams={{planetas}} />
      <Stack.Screen name="Profile" initialParams={{data: planeta}} component={Profile} />
      <Stack.Screen name="Cadastro" initialParams={{planeta: null, edit: false}} component={Cadastro} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
