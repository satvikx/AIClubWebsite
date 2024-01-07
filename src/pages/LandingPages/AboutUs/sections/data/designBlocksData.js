const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Events",
    description: "Upcoming and Past Events",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Logo Designing Competition",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Cypher-30",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
    ],
  },
  // {
  //   title: "Blogs",
  //   description: "From our content writers",
  //   items: [
  //     {
  //       image: `${imagesPrefix}/navbars.jpg`,
  //       name: "AI ML Guide",
  //       count: 4,
  //       route: "/sections/navigation/navbars",
  //     },
  //     {
  //       image: `${imagesPrefix}/nav-tabs.jpg`,
  //       name: "Data Science Guide",
  //       count: 2,
  //       route: "/sections/navigation/nav-tabs",
  //     },
  //     {
  //       image: `${imagesPrefix}/pagination.jpg`,
  //       name: "Git Tutorials",
  //       count: 3,
  //       route: "/sections/navigation/pagination",
  //     },
  //   ],
  // },
  {
    title: "Resources",
    description: "Important Resources",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "The AI Edge Magazine",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Github Repositories",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
    ],
  },
];
