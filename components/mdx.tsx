// overrides for built-in Nextra MDX components:
//   https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/mdx-components.tsx

import cn from 'clsx'

// CHANGES:
// - remove nx-italic
const blockquote = (props: any) => (
      <blockquote
        className={cn(
          'nx-mt-6 nx-border-gray-300 nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400',
          'first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6'
        )}
        {...props}
      />
    )

export const components = {
  blockquote,
}
