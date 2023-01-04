import React, { useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{ false: '#d9d9db', true: '#5856d6' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})