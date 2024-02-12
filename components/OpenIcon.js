export default function OpenIcon ({ height, width }) {
  return (
    <svg
      aria-hidden="true"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      width={width}
      className="mr-2"
    >
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
    </svg>
  );
};
