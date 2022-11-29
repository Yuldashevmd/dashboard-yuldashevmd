const GenericPage = () => {
  const location = window.location.pathname;

  return (
    <div>
      <h1>{location} page is on process</h1>
    </div>
  );
};

export default GenericPage;
