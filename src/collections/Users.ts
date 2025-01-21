import { adminGroups } from '@/utilities/adminGroups'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: adminGroups.website,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
