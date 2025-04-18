#include <iostream>
#include "person.h"
using namespace std;

int main (){

    person Jane = person("Jane",60.0f);
    person John = person ("John",75.0f);

    Jane.setAge(25);
    John.setAge(30);

    float totalWeight = Jane + John;
    cout << "Total weight: " << totalWeight << endl;

    int johnAge = John;
    cout << "John's Age:  " <<johnAge<<endl;

    string janeFirstName = Jane;
    cout << "Jane's Firstname: " << janeFirstName << endl;

    float janeWeight = Jane;
    cout << "Jane's weight " <<janeWeight<<endl;
   
    if (Jane ==John){
        cout << "This is the same person" <<endl;
    }
    if (Jane != John){
        cout << "This is Not the same person " << endl;
    }
    if (Jane < John){
        cout << "Jane is younger than John "  << endl;
    }
    if (John > Jane){
        cout << "John is older than Jane" << endl;
    }

    return 0;
}