export const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <article>
      <hr className="ml-8 mt-8" />

      <p className="text-gray-600 p-8 text-sm">&copy; {year} Symbols.</p>
    </article>
  );
};
