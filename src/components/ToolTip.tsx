const ToolTip = ({ label = "", description = "" }) => {
  return (
    <div className="flex gap-1 ml-2">
      <div className="group relative flex items-center">
        <span className="!text-xs italic bg-slate-400 text-white rounded-full w-5 h-5 grid place-content-center">
          i
        </span>

        <div className="p-4 w-60 left-8 space-y-1 absolute hidden group-hover:block bg-white border shadow-lg rounded-lg">
          <h3>{label}</h3>

          <hr />

          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
