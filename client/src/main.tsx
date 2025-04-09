import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome
const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

// Add Google Fonts
const googleFontsLink = document.createElement("link");
googleFontsLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Fira+Code:wght@400;500&display=swap";
googleFontsLink.rel = "stylesheet";
document.head.appendChild(googleFontsLink);

// Add meta tags for SEO
const titleTag = document.createElement("title");
titleTag.textContent = "Ankit Kumar | DevOps & Cloud Engineer";
document.head.appendChild(titleTag);

const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "DevOps and Cloud Computing Practitioner with experience in cloud infrastructure, automation, and CI/CD pipelines";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
