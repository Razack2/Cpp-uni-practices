#include "Triangle.h"


int Triangle::Area(){
    return mWidth * mHeight/2;
}

Triangle::Triangle(int width ,int height)
{
    height = mHeight;
    width = mWidth;
}
