import PageDynamicData from "./PageDynmaic";
import { getAllPageSlugs, getPageBySlug } from "../api-service";

export async function generateMetadata({ params }) {
    const slug = params?.slug || "home";
    const page = await getPageBySlug(slug);
    const seo = page?.seo || {};
    return {
        title: seo.metaTitle || page?.title || "Home",
        description: seo.metaDescription || "",
        keywords: seo.metaKeywords || "",
    };
}

// Generate static params (all slugs from Strapi)
// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:1337/api/pages");
//   const data = await res.json();

//   return data.data.map((page) => ({
//     slug: page.slug || page.attributes?.slug, // depending on your Strapi version
//   }));
// }

// Dynamic page component
export default function PageDynamic({ params }) {
  return <PageDynamicData slug={params.slug} />;
}


