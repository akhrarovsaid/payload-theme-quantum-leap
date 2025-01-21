import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
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
