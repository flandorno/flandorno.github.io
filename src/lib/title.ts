/* One source for the document title. It is also the <title> in index.html and the
   og:title, and it states the role on purpose: in a recruiter's row of five tabs
   "Portfolio | Fed…" names no one. Changing it here does not change index.html. */
export const BASE_TITLE = "Federico Landorno — Product Designer";

export const pageTitle = (page: string) => `${page} — Federico Landorno`;
