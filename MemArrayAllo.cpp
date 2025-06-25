#include <iostream>
using namespace std;

int main (){
    int firstVal;
    int secondVal;

    cout << "Enter a value to present number of rows (maximum is 3)";
    cin >> firstVal;

    while (firstVal < 1 || firstVal > 3){
        cout<<"Invalid input. Please enter a valid number (number must be between 1 and 3)"<<endl;
        cin >>firstVal;
    }

    cout << "Enter a value to present number of colums (maximum is 3)";
    cin >> secondVal;

    while (secondVal <1 || secondVal>3){
        cout<<"Invalid input. Please enter a valid number (number must be between 1 and 3)"<<endl;
        cin >>secondVal;
    }

    //dynamically memory allocation of 2D array
    double** numArray = new double* [firstVal];
    for (int i=0; i<firstVal; i++){
        numArray[i] = new double[secondVal];
    }

    cout << "Enter values for the array :" << endl;
    for (int i=0; i<firstVal; i++){
        for (int j=0; j<secondVal; j++){
            cout << "Element "<< "["<<i<<"]"<<"["<<j<<"]:";
            cin>>numArray[i][j];
        }
    }
    cout << "\n The values of the 2D array are :\n";
    for (int i=0; i<firstVal; i++){
        for (int j=0; j<secondVal; j++){
            cout<<numArray[i][j]<<"\t";
        }
        cout <<endl;
    }
    //free allocated memory//
    for (int i = 0; i <firstVal; i++) {
        delete[] numArray[i];
    }
    delete[] numArray;


    return 0;
}