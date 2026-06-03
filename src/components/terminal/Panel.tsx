import { ReactNode } from "react";

/**
 * Bordered "table" panel — the core content container of the site.
 * Optional monospace label rendered as a tab on the top hairline.
 */
export function Panel({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-line bg-white/[0.012] transition-colors duration-200 hover:border-line-bright ${className}`}
    >
      {label && (
        <span className="absolute -top-[7px] left-4 bg-bg px-2 text-[10px] uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
