import { createStackNavigator } from '@react-navigation/stack'
import { AlertScreen } from '../screens/AlertScreen'
import { Animation101 } from '../screens/Animation101'
import { Animation102 } from '../screens/Animation102'
import { HomeScreen } from '../screens/HomeScreen'
import { SwitchScreen } from '../screens/SwitchScreen'
import { TextInputScreen } from '../screens/TextInputScreen'

const Stack = createStackNavigator()

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101} />
      <Stack.Screen name="Animation102Screen" component={Animation102} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  )
}
