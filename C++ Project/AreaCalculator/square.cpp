#include <iostream>

#include "square.h"
using namespace std;

square::square()
{
    sideLength=0;
}

square::square(double s)
{
    sideLength=s;
}

void square::setsideLength(double side)
{
    sideLength =side;

}
double square::getsideLength() const
{
    return sideLength;
}

square::~square()
{
    cout << "square object have been deleted";
}