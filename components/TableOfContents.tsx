import { Cards, Card } from 'nextra/components'

type MetaKey = string
type MetaValue = string | {
  title: string
  icon?: string
  type?: 'page' | 'separator' | 'menu'
}

type Meta = Record<MetaKey, MetaValue>

type TableOfContentsProps = {
  prefix?: string
  meta: Meta
}

export function TableOfContents(props: TableOfContentsProps) {
  const { prefix = '', meta } = props
  return (
    <Cards>
      {Object.entries(meta).map(([key, value]) => {
        if (key === 'index' || key === 'why') return null
        let title: string
        let icon: string | null
        if (typeof value === 'string') {
          title = value
          icon = null
        } else {
          if (value.type) return null
          title = value.title
          icon = value.icon
        }
        return (
          <Card
            icon={icon}
            key={key}
            title={title}
            href={`${prefix}/${key}`}
          >
            {title}
          </Card>
        )
      })}
    </Cards>
  )
}
