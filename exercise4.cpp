#include <iostream>
#include <limits>
using namespace std;

int main(){
   int num;
    while (true){ 
    cout << "enter an integer value between 5 and 10 " <<endl;
    cin>>num;        
    
        if (cin.fail()) { 
            cin.clear(); 
            cin.ignore(numeric_limits<streamsize>::max(), '\n');  // Discard invalid input
            cout << "Sorry, entered invalid number. Please try again." << endl;
        } 
        else if (num>=5 && num <=10){   
            cout << "You entered "<<num<< ". Your input value("<<num<<")has been accepted";
            break;
        }
        else {
            cout <<"Sorry, entered invalid number. please try again ";
        }
            
     }
        
    return 0;
}

