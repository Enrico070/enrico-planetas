import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Cadastro";
import Profile from "../screens/Profile";
import Cadastro from "../screens/Cadastro";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
