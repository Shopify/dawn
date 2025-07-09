import PaginatedList from '@theme/paginated-list';

/**
 * A custom element that renders a paginated blog posts list
 */
export default class BlogPostsList extends PaginatedList {}

if (!customElements.get('blog-posts-list')) {
  customElements.define('blog-posts-list', BlogPostsList);
}
