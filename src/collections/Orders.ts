import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    group: adminGroups.featured,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
