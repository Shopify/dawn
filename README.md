# Expansion Blocks

## A fork of Dawn
This repo is a fork of Shopify's Dawn theme. For details on Dawn development standards, [see the Dawn readme](https://github.com/Shopify/dawn).

## Classnames
Important elements such as containers shoudl be given descriptive classnames that using the following format:
* **exp** to identify that this an Expansion Blocks class
* **A two letter identifier such as 'lp'** to identify the block that this corresponds to
* **A brief description**to explain what the element is

As an example, a classname for the label element in the linked products block would be:
```
class="exp-lp-products-label"
```

## IDs
Every element in in the DOM should have a static ID with the following format:
* **exp** to identify that this an Expansion Blocks class
* **The two letter identifier of the block** to identify the block that this corresponds to
* **A six digit number**that is unique to this element

As an example:
```
id="exp-lp-123456
```
The six digit number should be generated randomly and checked to ensure uniqueness.

## Block ID reference
| Block | ID |
| Linked products | lp |
| Purchase option selector | po |
| Quantity upsell | qu |