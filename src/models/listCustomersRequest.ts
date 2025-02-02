import { number, object, optional, Schema, string } from '../schema';

/**
 * Defines the query parameters that can be included in a request to the
 * `ListCustomers` endpoint.
 */
export interface ListCustomersRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * The limit is ignored if it is less than 1 or greater than 100. The default value is 100.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  limit?: number;
  /** Specifies customer attributes as the sort key to customer profiles returned from a search. */
  sortField?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
}

export const listCustomersRequestSchema: Schema<ListCustomersRequest> = object({
  cursor: ['cursor', optional(string())],
  limit: ['limit', optional(number())],
  sortField: ['sort_field', optional(string())],
  sortOrder: ['sort_order', optional(string())],
});
