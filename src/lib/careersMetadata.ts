import type { Metadata } from "next";
import { getJobBySlug } from "./getJobBySlug";

export  const careersMetadata = async (
  slug: string
): Promise<Metadata> => {
  const job = await getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job opening not Found",
      description: "This job post does not exist.",
    };
  }

  const { metaTitle, metaDescription, metaKeywords } = job;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: `${process.env.BASE_URL!}/api/auth/careers/careers-seo/${slug}`,
    },
  };
}