// export default async function PageDynamic({ params }) {
//     const slug = params?.slug || "home"; // 👈 default to "home"
//     const page = await getPageBySlug(slug);
//     console.log("page-----", page);
//     if (!page) {
//         return <h1>404 - Page Not Found</h1>;
//     }
//     return (
//         <main className="p-6">
//             {page.blocks?.map((block,index) => (
//                 <SectionRenderer key={index} section={block} />
//             ))}
//         </main>
//     );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import SectionRenderer from "../SectionRenderer";
import { getAllPageSlugs, getPageBySlug } from "../api-service";

export default function PageDynamicData({ slug }) {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
      fetchSingleProduct();
  }, []);
  const fetchSingleProduct = async () => {
      setLoading(true);
      const page =  await getPageBySlug(slug);
      setPage(page)
      setLoading(false);
  }

//   if (!page) return <h1>404 - Page Not Found</h1>;
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#254a5a] rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <main>
      <h1>{page?.title || page?.attributes?.title}</h1>
      <p>Slug: {slug}</p>
        {page?.blocks?.map((block,index) => (
        <SectionRenderer key={index} section={block} />
        ))}
    </main>
  );
}
