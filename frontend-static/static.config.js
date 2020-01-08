import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    return [
      {
        path: "home",
        template: "src/pages/index.tsx"
      },
      {
        path: "about",
        template: "src/pages/about.tsx"
      },
      {
        path: "contact",
        template: "src/pages/contact.tsx"
      },
      {
        path: "impressum",
        template: "src/pages/impressum.tsx"
      },
      {
        path: "projects",
        template: "src/pages/projects.tsx"
      },
      {
        path: "technic",
        template: "src/pages/technic.tsx"
      },
      {
        path: "/legal",
        template: "src/pages/legal.tsx"
      },
      {
        path: "sources",
        template: "src/pages/sources.tsx"
      },
      {
        path: "/projects/responsive-accessible-umbraco",
        template: "src/pages/projects/project-1.tsx"
      },
      {
        path: "/projects/inmemoryloader",
        template: "src/pages/projects/project-2.tsx"
      },
      {
        path: "/projects/industrie-digitalisierung-projekterfolg",
        template: "src/pages/projects/project-3.tsx"
      },
      {
        path: "/projects/information-zugaenglich-innovativ",
        template: "src/pages/projects/project-4.tsx"
      },
      {
        path: "/projects/ci-cd-cq",
        template: "src/pages/projects/project-5.tsx"
      },
      {
        path: "/projects/dgl-4com-novomind",
        template: "src/pages/projects/project-6.tsx"
      }
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
