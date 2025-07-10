#pragma once

class circle{
    private:
    double radius;

    public:
    circle();
    circle(double r);

    void setRadius(double radius);
    double getRadius()const;

    ~circle();
};
