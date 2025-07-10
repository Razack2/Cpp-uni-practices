#include "Area.h"
#include <cmath>

 
double Area::calcSquareArea(const square & sq)
{
    return sq.getsideLength() * sq.getsideLength();
}
double Area::calcTriangleArea(const triangle& Tr)
{
    return 0.5*Tr.getBase()*Tr.getHeight();
}
double Area::calcCircleArea(const circle& Cir)
{
    return M_PI * Cir.getRadius()* Cir.getRadius();
}
