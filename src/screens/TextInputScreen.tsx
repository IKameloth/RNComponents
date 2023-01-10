import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { myStyle } from '../theme/appTheme'

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChangeInput = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={myStyle.globalMargin}>
            <HeaderTitle title="Input Text" />
            <TextInput
              style={customStyle.input}
              placeholder="Enter name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value) => handleChangeInput(value, 'name')}
            />
            <TextInput
              style={customStyle.input}
              placeholder="Enter email"
              autoCapitalize="none"
              onChangeText={(value) => handleChangeInput(value, 'email')}
              keyboardType="email-address"
            />

            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <TextInput
              style={customStyle.input}
              placeholder="Enter phone"
              onChangeText={(value) => handleChangeInput(value, 'phone')}
              keyboardType="phone-pad"
            />
          </View>
          <View style={{ height: 100 }} />
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const customStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10
  }
})
