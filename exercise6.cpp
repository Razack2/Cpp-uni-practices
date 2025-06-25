#include <iostream>
#include <fstream>
using namespace std;

int main(){
     char data [200];

    ifstream inFile;//Open a text file in read mode
    inFile.open("file1.txt");

    inFile >> data;
    string fileData = data;
    cout << fileData;
  
    int length=sizeof(data)/sizeof(data[0]);
     for (int i; i<=length; i++){
        if(data[i]=='a' || data [i]=='e' || data[i]=='i' || data [i]=='o'
            || data [i]=='u');
            

     }
  
    return 0;
}
