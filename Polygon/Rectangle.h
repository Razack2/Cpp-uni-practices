#pragma once 

#include "Polygon.h"

class Rectangle: public Polygon{
    public:
    int Area();
    Rectangle(int height, int width);
};
