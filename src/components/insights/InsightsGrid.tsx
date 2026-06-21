import * as React from "react";
import { withBase } from "@/lib/links";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const BLOGS: BlogPost[] = [
  {
    slug: "blog-saas-product-development-2026",
    title: "The Complete Guide to SaaS Product Development in 2026",
    excerpt: "The barrier to build has dropped. The barrier to succeed has not. Learn the decisions that actually determine whether a SaaS product survives its first year.",
    date: "06.21.26",
    readTime: "8 Min Read",
    image: "/images/saas-dev-blog.png",
    category: "Blog",
  },
  {
    slug: "blog-web-app-traffic",
    title: "What Happens to Your Web App When Traffic Actually Arrives",
    excerpt: "Real traffic is a different animal. Learn what happens to your database, APIs, and infrastructure when load actually arrives—and how to prepare.",
    date: "06.15.26",
    readTime: "9 Min Read",
    image: "/images/web-traffic-blog.png",
    category: "Blog",
  },
];

export default function InsightsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap">
      {BLOGS.map((blog) => (
        <article
          key={blog.slug}
          className="group bg-surface-card border border-outline-variant overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="aspect-[16/10] overflow-hidden bg-surface-dim">
              <img
                src={withBase(blog.image)}
                alt={blog.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="p-stack-md">
              <div className="flex justify-between items-center mb-stack-sm">
                <span className="font-label-mono text-label-mono text-primary-fixed border border-primary-fixed px-2 py-0.5 uppercase">
                  {blog.category}
                </span>
                <div className="flex gap-4 text-on-surface-variant font-label-mono text-label-mono">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm line-clamp-2 min-h-[3.25rem] group-hover:text-primary-fixed transition-colors">
                {blog.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                {blog.excerpt}
              </p>
            </div>
          </div>
          <div className="px-stack-md pb-stack-md pt-0">
            <a
              className="inline-flex items-center gap-2 font-button text-primary-fixed group/link"
              href={withBase(`/insights/${blog.slug}`)}
            >
              Read Full Article
              <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
