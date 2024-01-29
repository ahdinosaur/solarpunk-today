import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Solarpunk Today</span>,
  docsRepositoryBase: 'https://github.com/ahdinosaur/solarpunk-today',
  project: {
    link: 'https://solarpunktoday.com',
  },
  footer: {
    text: 'Solarpunk Today',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Solarpunk Today',
      description: "How to live a solarpunk lifestyle today. Practical climate adaptations for everyday people.",
    }
  }
}

export default config
