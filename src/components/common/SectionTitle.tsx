type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-stone-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 leading-7 text-stone-600">{description}</p> : null}
    </div>
  );
}
