export default function Badge({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
        {children}
      </span>
    );
  }