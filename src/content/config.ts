// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    meta_description: z.string().optional().nullable(),
    main_content: z.string().optional().nullable(),
    main_content_image: z.string().optional().nullable(),
    sub_content_image: z.string().optional().nullable(),
    table_title: z.string().optional().nullable(),
    open_source_checked: z.boolean().optional().nullable(),
    self_hosted_checked: z.boolean().optional().nullable(),
    cloud_based_checked: z.boolean().optional().nullable(),
    easy_to_use_checked: z.boolean().optional().nullable(),
    data_security_checked: z.boolean().optional().nullable(),
    is_programmatic_seo: z.boolean().optional().nullable(),
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
};
