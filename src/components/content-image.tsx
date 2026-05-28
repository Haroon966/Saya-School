import Image from "next/image";
import { withBasePath } from "@/lib/with-base-path";

type ContentImageProps = {
  src: string;
  alt: string;
  aspect?: "video" | "square";
  className?: string;
  priority?: boolean;
};

export function ContentImage({
  src,
  alt,
  aspect = "video",
  className = "",
  priority = false,
}: ContentImageProps) {
  const aspectClass = aspect === "square" ? "aspect-square" : "aspect-[4/3]";

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        sizes={aspect === "square" ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
