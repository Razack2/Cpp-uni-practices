#pragma once

class triangle{
    private:
    float Base;
    float Height;
    
    public:
    triangle();
    triangle(float b, float h);

    void setBase(double b);
    void setHeight(double h);

    double getBase() const;
    double getHeight()const;

    ~triangle();
};