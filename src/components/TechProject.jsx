const TechProject = ({ title, imgTech, tech }) => {
  return (
    <>
      <img
        data-popover-target={`popover-${title}-${tech}`}
        src={imgTech}
        className="max-h-6"
        alt={`${tech} Icon`}
        width={24}
        height={24}
      />
      <div
        data-popover
        id={`popover-${title}-${tech}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0"
      >
        <div className="px-3 py-2">
          <p>{tech}</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};

export default TechProject;
