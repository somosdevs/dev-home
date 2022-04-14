import type { Item as ItemType } from '../../types/categories';

type Props = ItemType;

const ICON_BY_URL = {
  github: 'fa-brands fa-github',
  twitter: 'fa-brands fa-twitter',
};

const SUPPORTED_PAGES = Object.keys(ICON_BY_URL);

const getUrlPage = (url: string) => {
  let contains: boolean | string = false;
  SUPPORTED_PAGES.forEach((page) => {
    if (url.indexOf(page) !== -1) {
      contains = page;
    }
  });
  // @ts-ignore
  return ICON_BY_URL[contains] || 'fa-solid fa-link';
};

export default function Item ({ title, favorite, url }: Props) {
  return (
    <div className="item">
      <span className="category--icon">
        <i className={`${getUrlPage(url)}`}></i>
      </span>
      <h4>{title}</h4>
    </div>
  );
}
