import React from 'react'
import { View, FlatList } from 'react-native'
import { FlatListMenu } from '../components/FlatListMenu'
import { myStyle } from '../theme/appTheme'
import { menuItems } from '../data/menuItems'
import { HeaderTitle } from '../components/HeaderTitle'

export const HomeScreen = () => {
  const itemSeparator = () => {
    return <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
  }

  return (
    <View style={{ ...myStyle.globalMargin, flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FlatListMenu menuItem={item} />}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}
