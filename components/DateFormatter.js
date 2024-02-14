export default function DateFormatter({ dateString }) {

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return <span>{formatDate(dateString)}</span>;
}
