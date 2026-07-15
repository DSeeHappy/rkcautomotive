type JsonLdProps = {
  data: object | object[];
};

/** JSON.stringify + escape `<` so `</script>` in text cannot break the HTML parser. */
function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export default function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
