import { getCollection } from 'astro:content';

/**
 * Product content lives in src/content/products/*.mdx so writers can update one
 * frontmatter block per product without touching page code.
 */
export async function getProducts() {
  const products = await getCollection('products');

  return products.map((product) => product.data).sort((a, b) => a.sortOrder - b.sortOrder);
}
