export type Category = {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryItemProps {
  category: Omit<Category, 'id'>;
}

export interface DirectoryProps {
  categories: Category[];
}