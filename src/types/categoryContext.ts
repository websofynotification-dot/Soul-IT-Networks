export interface category {
  _id?: string;
  category: string;
  categoryType?: string;
}

export interface categoryProps {
  categoryData: category[];
}