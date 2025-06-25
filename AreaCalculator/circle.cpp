#include<iostream>
#include "circle.h"
using namespace std;


circle::circle()
{
    radius =0.0;
}
circle::circle(double r){
    radius =r;
}

void circle::setRadius(double r)
{
   radius = r;
}

double circle::getRadius() const
{
    return radius;
}

circle::~circle()
{
    cout << "Circle object have been deleted";
}

