interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
