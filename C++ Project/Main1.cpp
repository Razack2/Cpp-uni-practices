#include <iostream>
#include "Rectangle1.h"
using namespace std;

int main () {

    Rectangle1 rectangle;

    //using set methods
    rectangle.setWidth();
    rectangle.setLength();
    
    cout << "First rectangle \n";

    cout << "Length: " << rectangle.getLength() <<endl;
    cout << "Width: "  <<  rectangle.getWidth() <<endl;
    cout << "Area: "   << rectangle.CalculateArea() <<endl ;

    
    //using overloaded constructor 
    float l;
    float w;
    cout << "Enter width: " <<endl;
    cin >> w;

    cout << "Enter length: " <<endl;
    cin>>l;
    Rectangle1 rectangle2(l,w);

    cout << "Second rectangle : " << endl;
    cout << "Width: " << rectangle2.getWidth() << endl;
    cout << "Length: " << rectangle2.getLength() << endl;
    cout << "Area: "   << rectangle2.CalculateArea()<< endl;

    return 0;
}