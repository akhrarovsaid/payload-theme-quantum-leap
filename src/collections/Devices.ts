import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Devices: CollectionConfig = {
  slug: 'devices',
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
