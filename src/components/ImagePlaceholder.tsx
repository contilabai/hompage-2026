interface ImagePlaceholderProps {
  title: string;
  description?: string;
  aspectRatio?: "video" | "square" | "4/3" | "3/2";
  className?: string;
}

export default function ImagePlaceholder({
  title,
  description,
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  return (
    <div
      className={`relative ${aspectClass} bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 gap-3 ${className}`}
    >
      <svg
        className="w-10 h-10 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-600 font-semibold text-sm text-center">{title}</p>
      {description && (
        <p className="text-gray-400 text-xs text-center max-w-xs leading-relaxed">{description}</p>
      )}
    </div>
  );
}
