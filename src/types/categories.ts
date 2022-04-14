/* Category */
export type Category = {
  title: string,
  icon: string,
  color: string,
  items: Item[],
};

/* Items array */
export type Item = {
  title: string,
  url: string,
  favorite: boolean,
};
