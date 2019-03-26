# vuepress-pagination-example
An example for using Vuepress pagination plugin.  This plugin will split posts into groups of 10 to be displayed on the page one at a time.  Urls are generated for the next and previous groupings.

View the example by append [/page/](/page/) to the local webserver's path.

## Folder structure
The plugin is currently hardcoded to only paginate posts in a `page` folder.  The resulting paginations will be rendered at [/page/](/page/) and [/page/#](/page/2).

## Setup the config.js
Enable the plugin in the `.vuepress/config.js` file.  The default postsFilter will filter out all of the posts from the page folder.  Removing an extra set of parenthesis makes the pagination work correctly.

## Creating a component
The $pagination object contains the results of the pagination process.  Some of the information that will typically be used:

* posts - An ordered list of posts for the current pagination page.  Hardcoded to groups of 10.
* hasPrev/hasNext - Boolean indicating whether the previous or next page of posts exists.
* prevLink/nextLink - A link to the previous or next pagination of posts.

An example of these variable being used can be seen in `.vuepress/theme/components/Pagination.vue`.
