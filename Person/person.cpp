#include <iostream>
#include "person.h"
using namespace std;

person::person()
{
    mWeight = 0.0f;
    mAge = 0;
    mfirstName = "";
}
person::person(string newFirstName, float newWeight)
{
    mfirstName = newFirstName;
    mWeight = newWeight;
    mAge =0;
}
person::person(float newWeight)
{
    mWeight=newWeight;
}
person::~person(){
}
float person::operator+(const person &otherPerson){
      return mWeight = this->mWeight + otherPerson.mWeight;
} 