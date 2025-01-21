// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Devices } from './collections/Devices'
import { Orders } from './collections/Orders'
import { Customers } from './collections/Customers'
import { Reviews } from './collections/Reviews'
import { Pages } from './collections/Pages'
import { Categories } from './collections/Categories'
import { Discounts } from './collections/Discounts'
import { Posts } from './collections/Posts'
import { Header } from './globals/Header'
import { Menu } from './globals/Menu'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        dashboard: {
          Component: '/elements/Dashboard#Dashboard',
        },
      },
      beforeLogin: ['/elements/BeforeLogin#BeforeLogin'],
      graphics: {
        Icon: '/elements/Logo#Icon',
        Logo: '/elements/Logo#Logo',
      },
      Nav: '/elements/Nav#Nav',
    },
    avatar: {
      Component: '/elements/Avatar#Avatar',
    },
    theme: 'dark', // For demo purposes light mode is not implemented... yet!
  },
  collections: [
    Devices,
    Orders,
    Customers,
    Reviews,
    Pages,
    Posts,
    Media,
    Users,
    Categories,
    Discounts,
  ],
  globals: [Header, Menu, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
