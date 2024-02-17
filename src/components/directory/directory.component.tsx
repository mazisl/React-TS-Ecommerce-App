import CategoryItem from "../category-item/category-item.component";
import type { DirectoryProps } from "../../types";

import './directory.styles.scss';

const Directory = ({categories}: DirectoryProps) => {

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}      
    </div>
  )
}

export default Directory;