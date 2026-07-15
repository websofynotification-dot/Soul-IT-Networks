export const getJobBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.BASE_URL!}/api/auth/careers/careers-seo/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}
