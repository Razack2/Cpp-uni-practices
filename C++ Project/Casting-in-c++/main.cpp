#include <iostream>
#include "Derived.h"

using namespace std;

int main(){
    Base* pba  = new Derived();
    Base* pbb = new Base();
    Derived* pd;

    Base* pBase = new Base();  
    Derived* pDerived = static_cast<Derived*>(pBase);  


    pd = dynamic_cast<Derived*>(pba);
    if (pd==nullptr)
    {
        cout << "Null pointer on first type-cast\n";
    }

    pd = dynamic_cast <Derived*>(pbb);
    if(pd == nullptr){
        cout << "Null pointer on Second type-cast\n";
    }
    delete pba;
    pba = nullptr;

    delete pbb;
    pbb = nullptr;

    delete pBase;  
    pBase = nullptr;  

    return 0;
    
}