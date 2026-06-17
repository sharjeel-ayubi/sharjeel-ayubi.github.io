interface TagProps {
  children: React.ReactNode;
}

/** Small pill used for skills, tech and project labels. */
export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
