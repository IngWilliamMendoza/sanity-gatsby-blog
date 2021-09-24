export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614e388c6aee004943dbe5f0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-46fp912h",
                  apiId: "fae55b04-f424-405e-92a2-7bd50812fbd4",
                },
                {
                  buildHookId: "614e388ccba20d40997305a8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7fa3rcpq",
                  apiId: "5257fc30-1bc7-4d0f-8483-797717848c47",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/IngWilliamMendoza/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7fa3rcpq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
