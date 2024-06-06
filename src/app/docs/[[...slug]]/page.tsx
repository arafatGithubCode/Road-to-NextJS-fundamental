export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h2>
        viewing docs for features {params.slug[0]} and concept {params.slug[1]}
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for features {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
