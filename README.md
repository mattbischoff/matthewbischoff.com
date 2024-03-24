MatthewBischoff.com
=======================

## Creating a post

All posts are markdown files and they go inside the **`_posts`** folder. The title section of the file name (e.g., **`don't-go-to-college`**) will determine the permalink of the post.

## Front Matter

Front matter is the meta-data that goes at the beginning of each post.

| Field | Optional | Description |
| --- | --- | --- |
| `title` | required (string) | Determines the header of the post on the home page and on the show page, as well as the name that will appear when sharing the post on social media. |
| `permalink`| optional (string)| Determines the permalink of the post. Note: if this property is not present, the permalink will be set by the name of the markdown file. |
| `layout` | required (string) | Should always be set to post |
| `image` | optional (string) | File name that determines the image that will appear when sharing the post on social media. Example: release-notes-2016.jpg |
| `description` | optional (string) | Determines the description text that will when sharing the post on social media. |
| `format` | optional (string) | Can be set to post (default), link, or short. Determines the layout type of the post. |
| `categories` | optional (array) | Determines the categories the post will appear under. Each category must be already present in the _category folder (see “Creating a category”) |
| `tags` | optional (array) | Determines the tags in the HTML meta data that is used by Facebook. |

### Deprecated Fields

| `color` | conditionally required (string) | If the post is a tweet, it must be set to one of the following: red, purple, violet, blue, cyan, green~. Determines the background color of the tweet |

## “Read More” truncation

Add an HTML comment like so **`<!-- more -->`** in the markdown of your post where you want the read more button to be.

---

## Creating a category

Categories must be created (and destroyed) manually. Let’s say I want to add an “animals” category.

1. Create a new HTML file in the **`_category `** folder titled **`animals.md`**
2. In that file, add the following text


```
---
title: Animals
permalink: "/category/animals/"
name: animals
---
```

## How To

* Serve the site locally: `bundle exec jekyll serve`


### Inspo

* https://justin.searls.co
* https://jmduke.com
* https://ped.ro
  * https://ped.ro/writing/website-refresh-2023
* https://benji.org 