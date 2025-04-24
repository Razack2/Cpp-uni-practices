#include "Polygon.h"
#include <iostream>

using namespace std;

void Polygon::SetValues(int width, int height){
    mWidth= width;
    mHeight= height;

}
//int Polygon::Area(){   return 0;}
void Polygon::PrintArea(){
    std::cout << this->Area() << '\n';
}