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
void person::setAge(int age) {
    mAge = age;
}
person::operator int(){
    return mAge;
}
person::operator float(){
    return mWeight;
}
person::operator string(){
    return mfirstName;
}
person::~person(){
}
float person::operator+(const person &otherPerson){
      return mWeight = this->mWeight + otherPerson.mWeight;
} 
bool person::operator==(const person &otherPerson){
    return this->mfirstName == otherPerson.mfirstName;
} 
bool person::operator != (const person &otherPerson){
    return this->mfirstName != otherPerson.mfirstName;
}
bool person::operator > (const person &otherPerson){
    return this->mAge > otherPerson.mAge;
}
bool person::operator < (const person &otherPerson){
    return this->mAge < otherPerson.mAge;
}
