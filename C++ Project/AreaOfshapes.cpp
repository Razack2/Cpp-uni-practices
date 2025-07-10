#include <iostream>
using namespace std;

int main(){
    int  choice;
    do {
        
        cout << "Please select the area of the shape to calculate" <<endl;
        cout << "1.Square" << endl;
        cout << "2.Rectangle" << endl;
        cout << "3.Triangle" << endl;
        cout << "4.Quit Program" << endl;

        cout << "Enter selection : ";
        cin >>choice;

        if (choice==1){
            int size;
            int area;
            cout << "To calculate the area of Square. Enter size of side : ";
            cin >> size;
            area = size *size;

            cout << "The area of the  Square is " << area;

        }else if (choice ==2){
            int length;
            int width;

            cout << "To Calculate the area of Rectangle.\nEnter the length: ";
            cin >>length;

            cout << "Enter a Width: ";
            cin >>width;

            int RecArea = length*width;
            cout << "The area of rectangle is " << RecArea<<endl;

        }else if (choice==3){
            double height;
            double base;
            double TriArea;

            cout << "Enter a height: ";
            cin >> height;

            cout << "Enter a baseWidth: ";
            cin>> base;

            TriArea = (0.5) *(base * height) ;
            cout << "The Area of the Triangle is: " <<TriArea <<endl;

        }else if (choice==4){
            cout << "Good bye!:)";
            break;
            
        }else {

            cout << "Your input was: " << choice << ". Invalid input. Please enter a valid input !!!" << endl;
        }

     }while(choice !=4);

    return 0;
}
