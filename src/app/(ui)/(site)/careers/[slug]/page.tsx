import type { Metadata } from "next";
import { JobDetails } from "./JobDetails";
import Script from "next/script";
import { careersMetadata } from "@/lib/careersMetadata";
import { getJobBySlug } from "@/lib/getJobBySlug";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return careersMetadata(slug);
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return null;
  const schemaMarkup = job.schemaMarkup;

  return (
    <>
      {schemaMarkup && (
        <Script
          id={`schemaMarkup-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaMarkup
          }}
        />
      )}
      <JobDetails />
    </>
  )
}



