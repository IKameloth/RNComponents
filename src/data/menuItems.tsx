import { MenuItem } from '../interfaces'

export const menuItems: MenuItem[] = [
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
  },
  {
    id: 'randomkey3',
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    id: 'randomkey4',
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    id: 'randomkey5',
    name: 'Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  }
]
