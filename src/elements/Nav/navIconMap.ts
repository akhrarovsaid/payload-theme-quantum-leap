import { CollectionSlug, GlobalSlug } from 'payload'
import {
  BookCopy,
  Footprints,
  Image,
  LayoutGrid,
  List,
  LucideProps,
  Menu,
  Percent,
  Smile,
  Star,
  StickyNote,
  TabletSmartphone,
  User,
} from 'lucide-react'
import { ExoticComponent } from 'react'

export const navIconMap: Partial<
  Record<CollectionSlug | GlobalSlug, ExoticComponent<LucideProps>>
> = {
  categories: List,
  customers: User,
  devices: TabletSmartphone,
  discountCodes: Percent,
  media: Image,
  orders: BookCopy,
  pages: StickyNote,
  posts: LayoutGrid,
  reviews: Star,
  users: User,
  header: Smile,
  mainMenu: Menu,
  footer: Footprints,
}

export const getNavIcon = (slug: string) =>
  Object.hasOwn(navIconMap, slug) ? navIconMap[slug as CollectionSlug | GlobalSlug] : undefined
