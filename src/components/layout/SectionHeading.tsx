interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-28">
      <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{title}</h2>
      <p className="mt-2 text-base text-gray-600">{subtitle}</p>
    </div>
  );
}
