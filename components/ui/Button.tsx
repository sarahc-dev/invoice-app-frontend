export default function Button({
  children,
  style,
  onClick,
}: {
  children: string;
  style: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`heading-sm-var h-12 rounded-3xl px-6 text-white transition-all ${style}`}
      data-cy="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
