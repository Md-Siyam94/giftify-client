

const PopularCategoryCard = ({ cetegory }) => {
  const { title, description, icon } = cetegory || {}
  return (
    <div className="card rounded-xl bg-[#FAF5FF] shadow-xl mx-3 h-full">
      <img
        className="h-12 w-12 mx-auto mt-6 md:mt-7 lg:mt-8 object-contain"
        src={icon} alt="category icon" />
      <div className="card-body text-center flex-1 flex flex-col justify-between">
        <h2 className="text-xl lg:text-2xl font-semibold text-center">{title}</h2>
        <p className="text-gray-700 flex-1">{description}</p>

      </div>
    </div>
  );
};

export default PopularCategoryCard;