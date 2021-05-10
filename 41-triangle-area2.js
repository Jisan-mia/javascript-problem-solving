//  Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// herons formula states that the area of a triangle whose side have lenghts a, b, c
// area = Math.sqrt(s*((s-a)(s-b)(s-c))) a= side1, b = side2, c = side 3
// here s is semiperimeter of the triangle. rule of getting semiPerimeter
// s = (a+b+c) / 2;

function semiPerimeter(side1, side2, side3) {
	return (side1 + side2 + side3) / 2;
}

function areaOfTriangle3Lenght(side1, side2, side3) {
	const perimeter = semiPerimeter(side1, side2, side3);
	return Math.sqrt(
		perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)
	);
}

const result = areaOfTriangle3Lenght(5, 6, 7);
console.log(result);
