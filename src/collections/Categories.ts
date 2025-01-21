import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
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
