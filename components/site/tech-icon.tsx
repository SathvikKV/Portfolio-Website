import { techIcons, techKey, techSlugs } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

// Brands simple-icons no longer ships; fall back to the PNGs already in /public.
const localIcons: Record<string, string> = {
  aws: "aws",
  "aws s3": "aws",
  "aws ec2": "aws",
  s3: "aws",
  azure: "azure",
  "azure ocr": "azure",
  java: "java",
  gcp: "gcp",
};

/**
 * A technology's brand mark, drawn in ink and switching to its brand colour
 * when an enclosing `.group` is hovered. Renders nothing for unknown names.
 */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const key = techKey(name);
  const icon = techIcons[techSlugs[key]];

  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={cn("h-3 w-3 shrink-0 fill-current transition-colors duration-700 group-hover:text-[var(--brand)]", className)}
        style={{ ["--brand" as string]: `#${icon.hex}` }}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const local = localIcons[key];
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/img/icons/${local}.png`}
        alt=""
        aria-hidden
        draggable={false}
        className={cn("h-3 w-3 shrink-0 object-contain grayscale transition-[filter] duration-700 group-hover:grayscale-0", className)}
      />
    );
  }

  return null;
}

/** A tech name with its mark in front. */
export function Tech({ name, className, iconClassName }: { name: string; className?: string; iconClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", className)}>
      <TechIcon name={name} className={iconClassName} />
      {name}
    </span>
  );
}
