#include <iostream>
#include "person.h"
using namespace std;

int main (){
    
    person Jane = person("Jane",60.0f);
    person John = person ("John",75.0f);

    float totalWeight = Jane + John;

    cout << "Total weight: " << totalWeight << endl;

    return 0;
}