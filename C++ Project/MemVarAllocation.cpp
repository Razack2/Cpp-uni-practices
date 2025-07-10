#include <iostream>
using namespace std;

int main () {
    //dynamically allocation of an integer and a string value
    int* intvalue = new int;
    string* strvalue = new string;

    cout << "Enter an integer value " <<endl;
    cin >> *intvalue;


    cout << "Enter a string value" <<endl;
    cin >> *strvalue;
    cin.ignore();//ignores leftover new line


    cout << "The value  dynamically allocated to integer is: "<<*intvalue <<endl;
    cout << "The value  dynamically allocated to string is: "<<*strvalue<<endl;

    delete intvalue;
    delete strvalue;


    return 0;
}