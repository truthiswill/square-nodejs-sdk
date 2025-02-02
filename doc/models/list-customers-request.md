
# List Customers Request

Defines the query parameters that can be included in a request to the
`ListCustomers` endpoint.

## Structure

`ListCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Optional | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>The limit is ignored if it is less than 1 or greater than 100. The default value is 100.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).<br>**Constraints**: `>= 1`, `<= 100` |
| `sortField` | [`string \| undefined`](/doc/models/customer-sort-field.md) | Optional | Specifies customer attributes as the sort key to customer profiles returned from a search. |
| `sortOrder` | [`string \| undefined`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "cursor": "cursor6",
  "limit": 172,
  "sort_field": "DEFAULT",
  "sort_order": "DESC"
}
```

