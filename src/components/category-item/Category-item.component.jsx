import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="container">
      <div className="categories-container">
        {category.map(({ title, id, imageUrl }) => (
          <div
            className={`category-container bg-cover bg-no-repeat bg-center background-image`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            key={id}
          >
            <div
              className="flex flex-col text-content category-body-container"
              key={id}
            >
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
