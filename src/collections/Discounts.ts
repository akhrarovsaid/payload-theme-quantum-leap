import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Discounts: CollectionConfig = {
  slug: 'discountCodes',
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
