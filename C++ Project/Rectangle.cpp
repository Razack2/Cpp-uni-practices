#include <iostream>
#include "Rectangle.h"
using namespace std;

Rectangle:: Rectangle(){
    length =0.0f;
    width = 0.0f;
}
void Rectangle::setWidth(){
    cout << "Enter a width: ";
    cin >> width;   
}
void Rectangle::setLength() {
    cout << "Enter a length: ";
    cin >> length;
}
float Rectangle::getWidth()const{
    return width;
}
float Rectangle::getLength()const{
    return length;
}
float Rectangle::calculateArea()const{
    return length * width;
}
//Destructor
Rectangle::~Rectangle()
{
}
