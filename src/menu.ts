export interface AppMenuItem {
  id: string
  label: string
  path?: string
  children?: AppMenuItem[]
}

export const appMenu: AppMenuItem[] = [
  {
    id: 'tutorials',
    label: 'Tutorials',
    children: [
      { id: 'counter', label: 'Counter Example', path: '/counter' },
      { id: 'todo', label: 'Todo Example', path: '/todo' },
    ],
  },
  {
    id: 'documentation',
    label: 'Documentation',
    children: [
      {
        id: 'redux',
        label: 'Redux Guide',
        children: [
          { id: 'toolkit', label: 'Redux Toolkit', path: '/redux-guide/toolkit' },
          { id: 'patterns', label: 'Redux Patterns', path: '/redux-guide/patterns' },
        ],
      },
      { id: 'typescript', label: 'TypeScript Guide', path: '/typescript' },
    ],
  },
]
