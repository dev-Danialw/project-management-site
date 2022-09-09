const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };
  return (
    <div>
      <nav className="navbar bg-stone-100 rounded-2xl my-6 justify-start">
        <p className="px-2 font-bold">Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={
              currentFilter === f
                ? "btn btn-ghost normal-case text-xl btn-active mx-4"
                : "btn btn-ghost normal-case text-xl"
            }
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
