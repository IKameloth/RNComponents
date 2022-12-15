import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListMenu } from '../components/FlatListMenu'
import { MenuItem } from '../interfaces'
import { myStyle } from '../theme/appTheme'

const DATA: MenuItem[] = [
  {
    id: 'randomkey1',
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    id: 'randomkey2',
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  }
]

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const renderHeader = () => {
    return (
      <View style={{ marginTop: top, marginBottom: 10 }}>
        <Text style={myStyle.title}>Opciones de menu</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
  }

  return (
    <View style={{ ...myStyle.globalMargin, flex: 1 }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FlatListMenu menuItem={item} />}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}
