import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { myStyle } from '../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss')
      }
    )

  const showPromptIOS = () => {
    Alert.prompt(
      'Are you sure?',
      'This action cant be revert',
      (value: string) => console.log({ value }),
      'secure-text',
      undefined,
      'email-address'
    )
  }

  const showPromptExternalPlugin = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: (password) => console.log('OK Pressed, password: ' + password) }
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    )
  }

  return (
    <View style={myStyle.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
      <Button title="Show prompt IOS" onPress={showPromptIOS} />
      <Button title="Show external prompt" onPress={showPromptExternalPlugin} />
    </View>
  )
}
