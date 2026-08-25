interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageUrl,
  href,
} : ProjectCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition gap-6"
    >
      {/* Left Side: Title, Description, and Tags */}
      <div className="space-y-3 flex-1">
        <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition">
          {title} &rarr;
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="w-full md:w-64 h-42 relative rounded-md overflow-hidden bg-neutral-800 shrink-0 border border-neutral-700/50 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
          />
        ) : (
          <span className="text-neutral-500 text-xs font-medium">Image Placeholder</span>
        )}
      </div>
    </a>
  );
}