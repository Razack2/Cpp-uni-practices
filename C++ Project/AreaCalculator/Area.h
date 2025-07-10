#include "Square.h"
#include "Triangle.h"
#include "Circle.h"

class Area {
public:
    static double calcSquareArea(const square& sq);
    static double calcTriangleArea(const triangle& Tr);
    static double calcCircleArea(const circle& Cir);
};