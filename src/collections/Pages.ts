import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    group: adminGroups.website,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
