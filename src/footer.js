import githubLogo from "./img/github-dark.png";

export default function createFooter() {
  const footer = document.createElement("footer");
  const githubImage = document.createElement("img");
  const link = document.createElement("a");

  footer.classList.add("footer");

  githubImage.src = githubLogo;
  link.textContent = "brkyurun";
  link.href = "https://github.com/brkyurun";
  link.target = "_blank";

  footer.appendChild(githubImage);
  footer.appendChild(link);

  return footer;
}
