# grid #
###Lightweight Responsive Design Framework###
grid is 12-square grid framework, inteneded for responsive and/or grid-based design purposes.

To see it in action, checkout out [the demo](http://jstephens0.github.io/grid/)
##License##
grid is licensed under the [MIT License](http://opensource.org/licenses/MIT)

##Getting Started##
While it is recommended that you declare the viewport in the head of your file, it is **not required**. Simply declare the style in the head of your document and you are ready to go.

grid has been tested on HTML HTML 4.01, XHTML 1.0 & 1.1, and HTML5 width and without the viewport declared. No issues have been seen so far.

##Included File##
grid uses [Normalize.CSS](http://git.io/normalize) as an alternative to CSS resets. While include, it is **not** required.

##Sizes##
**grid uses four size designators**

* -lg : 1200px or above (Large devices)
* -md: : 992 - 1199px (Medium devices [smaller monitors, etc])
* -sm: : 768 - 991px (Small devices [tablets])
* -xs : 767px and below (Extra small devices [phones])

**width is based on segments in division of the 12-sqare layout**

* grjd-*-12: full grid width
* grid-*-6: 1/2 grid width
* grid-*-4: 1/3 grid width
* grid*-3: 1/4 grid width
* widths are built to accept values from 1 - 12

##Styling##
grid has no colors, aside from the following:

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

`grid-[size]-*` sets element width based on device width

`(visible|hidden)-[size]` will make an element visible or hidden based on the size (xs,sm,md,lg) assigned.
