// lib/strapi.js
const STRAPI_URL = "http://192.168.1.115:1337";

export async function strapiFetch(path, init = {}) {
  const url = new URL(path, STRAPI_URL);
  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 }, // ISR
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status}: ${await res.text()}`);
  }

  return res.json();
}

export async function getHeader() {
  const res = await fetch(`${STRAPI_URL}/api/header?populate=*`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log("data----",data);
  
  return data.data
}


export async function getAllPageSlugs() {
  const res = await fetch(`${STRAPI_URL}/api/pages`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log("Pages response:", data);
  return data.data.map((p) => p.slug);
}

export async function getPageBySlug(slug) {
  let data = await strapiFetch(
    `/api/pages?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`
  );
  console.log("data---",data);
  

  // if no page found → fallback to "home"
  if (!data?.data?.length) {
    data = await strapiFetch(
      `/api/pages?filters[slug][$eq]=home&populate[blocks][populate]=*`
    );
  }

  return data.data?.[0] || null;
}



export async function getGlobal() {
  const data = await strapiFetch("/api/global?populate=*"); // ✅ same fix here
  return data.data?.attributes || null;
}
