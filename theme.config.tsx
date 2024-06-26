import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

import { components } from './components/mdx'

const config: DocsThemeConfig = {
  logo: <span>Solarpunk Today</span>,
  docsRepositoryBase: 'https://github.com/ahdinosaur/solarpunk-today/tree/main',
  project: {
    link: 'https://github.com/ahdinosaur/solarpunk-today',
  },
  footer: {
    text: 'Solarpunk Today',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Solarpunk Today',
      description: "How to live a solarpunk lifestyle today. Practical climate adaptations for everyday people.",
    }
  },
  components,
}

export default config
