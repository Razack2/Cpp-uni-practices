#include <iostream>
#include "Rectangle.h"
using namespace std;


int main () {
   Rectangle rectangle;
   rectangle.setLength();
   rectangle.setWidth();

    cout << "Width: " << rectangle.getWidth() << endl;
    cout << "Length: " << rectangle.getLength() << endl;
    cout << "Area: " << rectangle.calculateArea() << endl;

    return 0;
}