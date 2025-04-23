#include <iostream>
#include "Rectangle.h"
#include "Triangle.h"

using namespace std;

int main(){
    Rectangle rect;
    Triangle trngl;

    rect.SetValues(4,5);
    trngl.SetValues(4,5);

    cout << rect.Area() << '\n';
    cout << trngl.Area() << '\n';

    return 0;
}