#pragma once 

class square{
    private:
   double sideLength;

    public:
    square();
    square(double s);

    void  setsideLength(double side);
    double getsideLength()const;

    ~square();

};