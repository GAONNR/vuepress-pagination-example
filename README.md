# pagination-example
An example for using Vuepress pagination plugin

## Folder structure
The plugin is currently hardcoded to only paginate posts in a 'page' folder.  The resulting paginations will be rendered at '/page/' and '/page/#'.

## Setup your config.js
Enable the plugin your '.vuepress/config.js' file.  The default postsFilter will filter out all of the posts from the page folder.  Removing an extra set of parentheses makes the pagination work correctly.  See the example .vuepress/config.js.

## Creating a component
The $pagination object contains the results of the pagination process.  Some of the information that will typically be used:

* posts - An ordered list of posts for the current pagination page.  Hardcoded to groups of 10.
* hasPrev/hasNext - Boolean indicating whether the previous or next page of posts exists.
* prevLink/nextLink - A link to the previous or next pagination of posts.

An example of these variable being used can be seen in .vuepress/theme/components/Pagination.vue.