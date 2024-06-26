// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    // kind: "github",
    // repo: {
    //   owner: "Bharat-bhandari",
    //   name: "oh-design-studio",
    // },
    kind: "local",
  },
  collections: {
    home_carousel: collection({
      label: "Home Carousel",
      slugField: "title",
      path: "src/content/home/homeCarousel/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        client_name: fields.text({
          label: "Client Name",
          validation: { isRequired: true },
        }),
        headline1: fields.text({
          label: "Headline 1",
          validation: { isRequired: true },
        }),
        headline2: fields.text({
          label: "Headline 2",
          validation: { isRequired: true },
        }),
        project_link: fields.text({
          label: "Project Link",
          validation: { isRequired: true },
        }),
        project_image: fields.image({
          label: "Background Image",
          directory: "/public/images/home/homeCarousal/",
          publicPath: "/images/home/homeCarousal/",
          validation: { isRequired: true },
        }),
      },
    }),

    portfolios: collection({
      label: "Portfolios",
      slugField: "title",
      path: "src/content/portfolios/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        client_name: fields.text({
          label: "Client Name",
          validation: { isRequired: true },
        }),
        headline1: fields.text({
          label: "Headline 1",
          validation: { isRequired: true },
        }),
        headline2: fields.text({
          label: "Headline 2",
          validation: { isRequired: true },
        }),
        portfolio_category: fields.text({
          label: "Portfolio Category",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          validation: { isRequired: true },
        }),
        project_bg_image: fields.image({
          label: "Main Background Image",
          directory: "/public/images/portfolios/",
          publicPath: "/images/portfolios/",
          validation: { isRequired: true },
        }),
        portfolio_images: fields.array(
          fields.image({
            label: "Image",
            directory: "/public/images/singlePortfolio/",
            publicPath: "/images/singlePortfolio/",
          }),
          {
            label: "Portfolio Images",
            description: "Add all images in sequence",
          }
        ),
      },
    }),
  },
});
