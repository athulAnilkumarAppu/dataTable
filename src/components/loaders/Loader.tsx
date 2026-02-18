const Loader = () => {
  const rows = Array.from({ length: 8 });

  return (
    <div className="table-loader-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>
              <div className="skeleton-box" />
            </th>
            <th>
              <div className="skeleton-box" />
            </th>
            <th>
              <div className="skeleton-box" />
            </th>
            <th>
              <div className="skeleton-box" />
            </th>
            <th>
              <div className="skeleton-box" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => (
            <tr key={index}>
              <td>
                <div className="skeleton-box" />
              </td>
              <td>
                <div className="skeleton-box" />
              </td>
              <td>
                <div className="skeleton-box" />
              </td>
              <td>
                <div className="skeleton-box" />
              </td>
              <td>
                <div className="skeleton-box" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loader;
