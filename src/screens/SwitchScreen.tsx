import React, { useState } from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const { isActive, isHappy, isHungry } = state

  const handleOnChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    })
  }

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.center}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => handleOnChange(value, 'isActive')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => handleOnChange(value, 'isHungry')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => handleOnChange(value, 'isHappy')} />
      </View>
      <Text>{JSON.stringify(state, null, 5)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchText: {
    fontSize: 25
  },
  center: {
    flexDirection: 'row',
    marginVertical: 20
  }
})
