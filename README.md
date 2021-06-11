# Sierpiński triangle

The Sierpiński triangle (sometimes spelled Sierpinski), also called the Sierpiński gasket or Sierpiński sieve, is a fractal attractive fixed set with the overall shape of an equilateral triangle, subdivided recursively into smaller equilateral triangles.

## Chaos game

If one takes a point and applies each of the transformations d<sub>A</sub>, d<sub>B</sub>, and d<sub>C</sub> to it randomly, the resulting points will be dense in the Sierpinski triangle, so the following algorithm will again generate arbitrarily close approximations to it.

Or more simply:

1. Take three points in a plane to form a triangle, you need not draw it.
1. Randomly select any point inside the triangle and consider that your current position.
1. Randomly select any one of the three vertex points.
1. Move half the distance from your current position to the selected vertex.
1. Plot the current position.
1. Repeat from step 3.

[Numberphile](https://youtu.be/kbKtFN71Lfs) has a great video on this subject!
Read more about it on [Wikipedia](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle).

## Canvas

The Sierpiński triangle will render with a maximum of 5000 iterations onto the canvas. Try moving the starting point as well as point A, B and C to see different variations.
