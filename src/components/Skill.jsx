const Skill = ({ url, icon_url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      key={name}
      data-aos="zoom-in"
      data-aos-duration="500"
      className="flex flex-col justify-center items-center px-10 py-6 bg-[#444444] rounded-xl cursor-pointer shadow-md hover:shadow-lg hover:!scale-105 transition-all duration-200 gap-2"
    >
      <img src={icon_url} alt={name} width={40} height={40} />
      <p className="text-white font-medium text-xs">{name}</p>
    </a>
  );
};

export default Skill;
