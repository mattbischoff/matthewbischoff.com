import { postsThatShouldBeShown, renderNewPost } from "./renderPosts"
import { getYear, getCategory } from "./index";

const footer = document.querySelector("footer");
const main = document.querySelector("main");

export const setPosts = (data, postList) => {
  const year = getYear();
  const category = getCategory();


  const posts = document.querySelector(".posts");
  if (posts === null) { return; }

  Array.from(document.querySelectorAll("article.post")).forEach(article => article.remove());
  postsThatShouldBeShown(data, category, year).slice(0, 5).forEach(post => renderNewPost(post, postList));
}

export const setAndRenderPosts = (data, postList) => {
  footer.style.opacity = "0";
  main.style.opacity = "0";

  setTimeout(() => {
    setPosts(data, postList);
    setTimeout(() => {
      main.style.opacity = "1";
      footer.style.opacity = "1";
    }, 300);
  }, 300);
}