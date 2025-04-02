#include <iostream>
using namespace std;

int main(){
    //declare pointer and initialize it 
    //so that it doesnt store a random address 
    int* pPointer = nullptr;

    int integerVar = 5;

    //assign pointer to address of object
    pPointer = &integerVar;

    cout << "integerVar: " << integerVar <<endl; 

    //output the address of pPointer
    cout << "integerVar: " << &integerVar <<endl; 
    cout << "Address of integerVar: "<< pPointer <<endl;
    //output the address of pPointer
    cout<< "Address of pPointer : " << &pPointer <<endl;
    return 0;

}