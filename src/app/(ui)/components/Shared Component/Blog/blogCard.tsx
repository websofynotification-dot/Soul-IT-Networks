"use client"
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { extractExcerpt } from "@/lib/extractExcerpt";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { _id, title, image, content, slug } = blog || {};
    const router = useRouter();
    const excerpt = extractExcerpt(content);
    const safeImage = image || "/images/highlight/stintwol-heighlight.jpeg";

    return (
        <div className="group relative bg-white rounded-xl shadow-md border transition-all duration-300 hover:border-secondary/30 hover:shadow-xl">
            {
                safeImage && _id &&
                <div className="mb-4 overflow-hidden rounded-t-xl h-64">
                    <Link href={`/blog/${slug}`} aria-label="blog cover" className="block">
                        <Image
                            src={safeImage}
                            alt={`Image of ${title}`}
                            className="h-64 transition group-hover:scale-125"
                            width={408}
                            height={390}
                            quality={100}  
                        />
                    </Link>
                </div>
            }

            <div className="px-5">
                {
                    _id && <div className="flex flex-col gap-4 mb-8">
                        <Link href={`/blog/${slug}`}>
                            <h3
                                className="mt-3 inline-block font-semibold text-start text-MidnightNavyText hover:text-secondary/80"
                            >
                                {title}
                            </h3>
                        </Link>
                        {
                            excerpt && <p className="text-MidnightNavyText/50 text-sm text-justify h-24">{excerpt.trimEnd()}.......
                            </p>
                        }
                        <button
                            className="btn_primary w-40 hover:bg-white hover:text-primary hover:border hover:border-secondary/80
                    "
                            onClick={() => router.push(`/blog/${slug}`)}
                        >
                            Read More
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogCard;

