# Notes for slides

1%%Here is our dear friend, the DOM Element.
1. Fade in a square, perhaps 200px.

Web design is a perpetual process of finding better ways of arranging DOM elements in the browser.

For so long, our only options were to float 1%%left or 2%%right
1. DE floats left
2. DE floats right

Or using a coordinate system with position.
1. DE moves up and down
2. DE moves left and right

However, all of the latest browsers have a new technology unlocking another dimension of possibility: CSS 3D Transforms.

Transforms let you move and rotate DOM elements along three axes of motion: 1%%4%%x, 2%%5%%y, and 3%%6%%z
1. DE moves along x axis (blue)
2. DE moves along y axis (green)
3. DE moves along z axis (red, use perspective)
4. DE rotates along x axis (blue, use perspective)
5. DE rotates along y axis (green, use perspective)
6. DE rotates along z axis (red, use perspective)

When combined with some settings that control perspective, you can create 3D figures out of regular DOM elements.

These perspective settings go on the container of the 3D elements.
1. {code} perspective
2. {code} perspective-origin
3. {code} backface-visibility

These transforms go on the element you want to transform
1. {code} translate
2. {code} rotate

Creating primitives

Since transforms are inherited by children, you can think of nested elements much like paper

Just align the two <code>transform-origin</code>s of nested elements to a common edge, and it "folds" like paper:
1. Show two DEs first in the same position then one folds 90° from a common edge
2. Now another folds out from the second, also 90°
3. Another folds out, starting to form a cube
4. All six fold out, completing the cube
5. The first and second joints open up more, revealing the "t" shape that an unfolded paper cube makes

You can simulate other more complex objects. This slinky is not a spiral, but numerous nested <code><div>s</code>
1. Demo slinky

You can superimpose transforms on top of real images
1. Demo tile

DOM elements can be enhanced by JavaScript. Just write <code><span class="cube"></span></code> in your markup and have your script add [bottom, left, right, front, back] edges.
1. Make various minecraft blocks out of really simple markup+classes
2. *Maybe* make it so clicking a surface generates the new block on that surface

Combining with other CSS
1. Demo blur filter

The end

# Todos

- blur filter: convert to Sass, add real 3d perspctive and shift perspective origin based on cursor position
- tile: convert to Sass, test in IE10/FF/Chrome/Safari
- slinky: convert to Sass, add border-image and mask to make it look shiny

- Make 3D headings by using two 0px box shadows
