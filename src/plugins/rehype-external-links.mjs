// Opens external links (http/https to another host) in a new tab.
// Internal links to tutorials.siteposterpro.com, relative links and mailto: are left alone.
const SITE_HOST = 'tutorials.siteposterpro.com';

function isExternal(href) {
  if (typeof href !== 'string' || !/^https?:\/\//i.test(href)) return false;
  try {
    return new URL(href).hostname !== SITE_HOST;
  } catch {
    return false;
  }
}

function visit(node) {
  if (node.type === 'element' && node.tagName === 'a' && isExternal(node.properties?.href)) {
    node.properties.target = '_blank';
    const rel = new Set([...(node.properties.rel || []), 'noopener', 'noreferrer']);
    node.properties.rel = [...rel];
  }
  if (node.children) node.children.forEach(visit);
}

export default function rehypeExternalLinks() {
  return (tree) => visit(tree);
}
