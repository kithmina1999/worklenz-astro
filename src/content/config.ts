// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    meta_description: z.string().optional().nullable(),
    main_content: z.string().optional().nullable(),
    content_01: z.string().optional().nullable(),
    content_02: z.string().optional().nullable(),
    main_content_image: z.string().optional().nullable(),
    sub_content_image: z.string().optional().nullable(),
    table_title: z.string().optional().nullable(),
    open_source_checked: z.boolean().optional().nullable(),
    self_hosted_checked: z.boolean().optional().nullable(),
    cloud_based_checked: z.boolean().optional().nullable(),
    easy_to_use_checked: z.boolean().optional().nullable(),
    data_security_checked: z.boolean().optional().nullable(),
    blog_type: z.string().optional().nullable(),
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    is_unsplash: z.boolean().optional().nullable(),
    unsplash: z.object({
      username:  z.string(),
      user_profile_url:  z.string()
    }).optional(),
    publishDate: z.coerce.date(),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
    tools: z.record(
      z.object({
        sub_title: z.string(),
        main_content: z.string(),
        features: z.array(z.string()),
        analytics_rate: z.string(),
        analytics_review: z.string(),
        customization_rate: z.string(),
        customization_review: z.string(),
        collaboration_features_rate: z.string(),
        collaboration_features_review: z.string(),
        self_hosted: z.boolean().default(false),
        open_source: z.boolean().default(false),
        pricing: z.string().default("Free & Paid plans"),
      })).optional().nullable(),
    is_programmatic_seo: z.boolean().default(false),
    is_programmatic_layout_2: z.boolean().default(false),
    is_programmatic_layout_3: z.boolean().default(false),
    is_programmatic_layout_4: z.boolean().default(false),
    is_programmatic_layout_5: z.boolean().default(false),
    related: z.array(z.string()).optional().nullable(),
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
