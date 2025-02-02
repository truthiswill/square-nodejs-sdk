
# Order Line Item Modifier

A [CatalogModifier](/doc/models/catalog-modifier.md).

## Structure

`OrderLineItemModifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | A unique ID that identifies the modifier only within this order.<br>**Constraints**: *Maximum Length*: `60` |
| `catalogObjectId` | `string \| undefined` | Optional | The catalog object ID referencing [CatalogModifier](/doc/models/catalog-modifier.md).<br>**Constraints**: *Maximum Length*: `192` |
| `catalogVersion` | `bigint \| undefined` | Optional | The version of the catalog object that this modifier references. |
| `name` | `string \| undefined` | Optional | The name of the item modifier.<br>**Constraints**: *Maximum Length*: `255` |
| `basePriceMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `totalPriceMoney` | [`Money \| undefined`](/doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "catalog_object_id": "catalog_object_id6",
  "catalog_version": 126,
  "name": "name0",
  "base_price_money": {
    "amount": 114,
    "currency": "ALL"
  }
}
```

