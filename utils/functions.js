const shimmer = (
  w,
  h
) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const returnClassNames = (status) => {
  const { fixed, blurred, dark } = status;
  let classes = "";
  if (fixed) {
    classes += "fixed";
  }
  if (blurred) {
    classes += " blurred";
  }
  if (dark) {
    classes += " dark";
  } else {
    classes += "transparent";
  }
  return classes;
};

const returnDirection = (index) => {
  return index % 2 === 0 ? "left" : "right";
};

export { toBase64, shimmer, returnClassNames, returnDirection };
