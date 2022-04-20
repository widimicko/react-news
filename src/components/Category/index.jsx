import "./style.css";

const Category = ({ category, selected, handleChange }) => {
  const { name, slug } = category;
  return (
    <div
      className={`category ${selected === slug ? "selected" : ""}`}
      onClick={handleChange}
    >
      {name}
    </div>
  );
};

export default Category;
