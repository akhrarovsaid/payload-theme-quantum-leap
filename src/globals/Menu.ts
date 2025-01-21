import { adminGroups } from '@/utilities/adminGroups'
import type { GlobalConfig } from 'payload'

export const Menu: GlobalConfig = {
  slug: 'mainMenu',
  admin: {
    group: adminGroups.globals,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
