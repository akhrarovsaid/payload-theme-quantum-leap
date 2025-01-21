import { adminGroups } from '@/utilities/adminGroups'
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
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
