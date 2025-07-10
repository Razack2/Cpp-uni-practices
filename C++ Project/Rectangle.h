#pragma once

class Rectangle {
private:
    float length;
    float width;

public:
    Rectangle();

    void setWidth();
    void setLength();

    float getWidth() const;
    float getLength() const;

    float calculateArea() const;
    ~Rectangle();
};

