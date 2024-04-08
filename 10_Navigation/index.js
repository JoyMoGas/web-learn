const url = new URL("https://web.dev/learn/html/navigation");
const sections = url.hostname + url.pathname.split('/');
// "web.dev,learn,html,navigation"