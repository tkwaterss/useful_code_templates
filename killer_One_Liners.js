//^ Shuffle Array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//^ Copy to Clipboard
const copyToClipboard = (text) =>
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

//^ Unique Elements
const getUnique = (arr) => [...new Set(arr)];

//^ Detect Dark Mode
const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

//^ Scroll To Top
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });

//^ Scroll to Bottom
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });

//^ Generate Random Color
const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;