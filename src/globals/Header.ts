import { adminGroups } from '@/utilities/adminGroups'
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
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
