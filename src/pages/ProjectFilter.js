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
      <p className="px-2 font-bold">Filter by:</p>
      <nav className="btn-group bg-stone-100 rounded-2xl my-6 md:flex-row  justify-evenly items-center ">
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={
              currentFilter === f
                ? "btn btn-ghost normal-case text-xl btn-active"
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
