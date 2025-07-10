#include <iostream>
using namespace std;

int main (){

    int firstValue;
    int secondValue;
    
    int * pPointer = nullptr;

    //assign pointer with the address of firstvalue
    pPointer = &firstValue;

    *pPointer = 10;//indirection

    //assign pointer with the address of secondValue
    pPointer = &secondValue;
    *pPointer = 20;

    cout << "firstValue is " << firstValue << '\n';
    cout << "secondValue is " << secondValue << '\n';



    return 0;
}