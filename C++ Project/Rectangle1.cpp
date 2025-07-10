#include <iostream>
#include "Rectangle1.h"
using namespace std;

Rectangle1::Rectangle1(){
    length=0.0f;
    width=0.0f;
}

Rectangle1::Rectangle1(float l, float w)
{
    length = l;
    width  = w;
}
void Rectangle1::setWidth(){
    cout <<"Enter Width: ";
    cin>>width;
}
void Rectangle1::setLength(){
    cout << "Enter Length: ";
    cin>>length;
}
float Rectangle1::getLength() const
{
    return length;
}

float Rectangle1::getWidth() const
{
    return width;
}
float Rectangle1::CalculateArea() const
{
    return length*width;
}

Rectangle1::~Rectangle1()
{
    cout<< "object rectangle is destroyed" <<endl;
}
