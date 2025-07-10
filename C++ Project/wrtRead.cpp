#include <iostream>
#include <fstream>
using namespace std;

int main () {
    char data [100];

    //open a file in write mode
    ofstream outfile;
    outfile.open ("bfile.txt");
    cout<< "Writing to the file "<< endl;
    cout << "Enter your name:" ;
    cin.getline(data,100);

    //writing the inputted data to the file
    outfile << data;
    cout << "Enter your age: " << endl;
    cin.ignore();

    //writing again the inputted data to the file
    outfile << data<<endl;
    outfile.close();

    //reading mode
    ifstream infile;
    infile.open("bfile.txt");
    cout<< "Reading from a file" << endl;
    infile >>data;

    //again read the file again and display to the screen
    infile >> data;
    cout << data;

    infile.close();


    return 0;
}