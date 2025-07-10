#pragma once

class Rectangle1 {
    private:
    float length;
    float width;

    public:
    Rectangle1();
    Rectangle1(float w, float l);

    void setWidth();
    void setLength();

    float getWidth()const;
    float getLength() const;
    
    float CalculateArea() const;
    ~Rectangle1();

};