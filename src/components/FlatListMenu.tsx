import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MenuItem } from '../interfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

interface Props {
  menuItem: MenuItem
}

export const FlatListMenu = ({ menuItem }: Props) => {
  const navigation = useNavigation<any>()

  const { icon, name } = menuItem
  return (
    <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={icon} size={20} color="#5856D6" />
        <Text style={styles.itemText}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="caret-forward-outline" size={20} color="#5856D6" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  }
})
