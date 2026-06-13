export interface AppMenuItem {
  id: string;
  label: string;
  path?: string;
  children?: AppMenuItem[];
}

export const appMenu: AppMenuItem[] = [
  {
    id: "React",
    label: "React Js",
    children: [
      { id: "intoduction", label: "What is React js", path: "/react" },
      {
        id: "reactfeatures",
        label: "Features of React js",
        children: [
          { id: "featuresoverview", label: "Features Overview", path: "/react/features" },
          { id: "virtualdom", label: "Virtual DOM", path: "/react/features/virtual-dom" }
        ]
      },
      { id: "proscons", label: "Pros and Cons of React js", path: "/react/proscons" },
    ],
  },
  {
    id: "redux",
    label: "Redux",
    children: [
      { id: "intoduction", label: "What is Redux", path: "/redux" },
      { id: "todo", label: "Todo Example", path: "/todo" },
    ],
  },
  {
    id: "HTML",
    label: "HTML",
    children: [
      { id: "intoduction", label: "What is HTML", path: "/counter" },
      { id: "todo", label: "Todo Example", path: "/todo" },
    ],
  },
  {
    id: "CSS",
    label: "CSS",
    children: [
      { id: "intoduction", label: "What is CSS", path: "/counter" },
      { id: "todo", label: "Todo Example", path: "/todo" },
    ],
  },
  {
    id: "tutorials",
    label: "Tutorials",
    children: [
      { id: "counter", label: "Counter Example", path: "/counter" },
      { id: "todo", label: "Todo Example", path: "/todo" },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    children: [
      {
        id: "redux",
        label: "Redux Guide",
        children: [
          {
            id: "toolkit",
            label: "Redux Toolkit",
            path: "/redux-guide/toolkit",
          },
          {
            id: "patterns",
            label: "Redux Patterns",
            path: "/redux-guide/patterns",
          },
        ],
      },
      { id: "typescript", label: "TypeScript Guide", path: "/typescript" },
      { id: "comparison", label: "Comparison Table", path: "/comparison" },
    ],
  },
];
