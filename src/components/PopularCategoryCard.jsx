

const PopularCategoryCard = ({ cetegory }) => {
  const { title, description, icon } = cetegory || {}
  return (
    <div className="card rounded-2xl bg-[#FAF5FF]  shadow-xl py-6">
      <img 
      className="h-12 w-12  mx-auto mt-5"
      src={icon} alt="cetegory icon" />
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold text-center">{title}</h2>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default PopularCategoryCard;