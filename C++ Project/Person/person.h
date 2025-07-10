#pragma once
#include <string>

class person {
    public: 
        person();
        person(std::string name, float newWeight);
        person (float newWeight);
        void setAge(int age);

        operator int ();
        operator std::string();
        operator float ();

        ~person();
        

        //overload the operator
        //returntype operatorKeyword symbol (parameters)

        float operator + (const person& otherPerson);
        bool operator ==(const person &otherPerson);
        bool operator != (const person &otherPerson);
        bool operator > (const person &otherPerson);
        bool operator < (const person &otherPerson);

    private:
        float mWeight;
        std::string mfirstName;
        int mAge;

};