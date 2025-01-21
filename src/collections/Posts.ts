import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
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
