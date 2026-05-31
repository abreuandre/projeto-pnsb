export interface NewsItem {
  id: number
  slug: string
  title: string
  subtitle: string
  date: string
  category: string
  imageUrl: string
  summary: string
  content: string[]
  tags: string[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  imageUrl?: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  imageUrl: string
  bio: string
  isMain?: boolean
}
