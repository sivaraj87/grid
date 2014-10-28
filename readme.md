# grid #
**Lightweight Responsive Design Framework**

grid is 12-square grid framework, inteneded for responsive design or grid-based design purposes.
##Getting Started##
While it is recommended that you declare the viewport in the head of your file, it is **not required**. Simply declare the style in the head of your document and you are ready to go.

Grid has been tested on HTML HTML 4.01, XHTML 1.0 & 1.1, and HTML5 width and without the viewport declared. Not issues have been seen so far.

#Styling#
Grid has no colors, aside from the following:
* `code` [color: #990000]
* `blockquote` [color: #0A67A3]
* `pre` [color: #339933]
*  and all grid squares: [background: #FFFFFF]
All of which can be overwritten in your own CSS file.

##Classes##
There are also positional and alignment classes included in grid.

"Sticky" elements can be assigned with any of the following classes:
`fixed-(left|right)-midde` allows you to affix an element to the side of the screen, regardless of scroll position.

`nav-(fixed|static)-top` will affix the navbar to the top of the screen. Static will allow it to disappear on scroll, just like any other content. Fixed will affix it to the top of the page and all content will scroll underneath it.
***Fixed navigation may require adding padding to the body.***

`nav-fixed-bottom` will position the element at the bottom of the window and allow it to overflow all other content on scroll.

`text-(left|center|right)` will align the text to whatever alignment you choose.

`text-(lowercase|uppercase|capitalize)` will change the case of the text in the assigned element.

`img-respond` will allow your image to be responsive according to the size of the browser.

`img-rounded` will round the corners of your image.

`pull-(left|right)` will move the element left or right.

`list-unstyled` will remove bullets from your lists.

`clearfix` clears all floats or positioning to start the alignment anew.

`embed` is a wrapper class for videos, iframes, embeds, and objects.

`headline` is a class for enlarging the text in that element.

`row` makes the element full-width container, mainly intended as a wrapper for other content.

`container` is a 4/5-width container, also intended as a content wrapper.

`btn-link` makes a button look like a link, no border, no background, just the text of the button.

`btn-block` creates a button the full width of the containing element.