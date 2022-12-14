import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { myStyle } from '../theme/appTheme'

interface Props {
  title: string
}

export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ marginTop: top, marginBottom: 10 }}>
      <Text style={myStyle.title}>{title}</Text>
    </View>
  )
}
