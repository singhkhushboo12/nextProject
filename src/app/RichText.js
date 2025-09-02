// components/sections/RichText.js
export default function RichText({ content }) {
  return (
    <section className="py-10">
      <div
        // className="prose mx-auto max-w-3xl px-4"
        // dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
