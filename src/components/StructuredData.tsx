/** JSON-LD is server-rendered and is always derived from the visible portfolio data. */
export function StructuredData({data}: {data: Record<string, unknown>}) {
  const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: safeJson}} />;
}
