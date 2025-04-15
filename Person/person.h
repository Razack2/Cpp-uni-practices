#pragma once
#include <string>

class person {
    public: 
        person();
        person(std::string name, float newWeight);
        person (float newWeight);
        ~person();
        //overload the operator

        float operator + (const person& otherPerson);

    private:
        float mWeight;
        std::string mfirstName;
        int mAge;

};