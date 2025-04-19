#include <iostream>
#include "triangle.h"
using namespace std;



triangle::triangle()
{
    Height=0.0f;
    Base = 0.0f;
}

triangle::triangle(float b, float h)
{
    Height = h;
    Base = b;
}

void triangle::setBase(double b)
{
   Base = b;
}
void triangle::setHeight(double h)
{
    Height = h;   
}
double triangle::getBase() const
{
    return Base;
}
double triangle::getHeight() const 
{
    return Height;
}

triangle::~triangle()
{
    cout << "Triangle object have been deleted";
}