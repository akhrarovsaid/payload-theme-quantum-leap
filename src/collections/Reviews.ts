import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
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
