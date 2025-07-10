#include "Area.h"
#include "circle.h"
#include "square.h"
#include "triangle.h"
#include <iostream>

using namespace std ;

int main () {

    int choice;
    do {
        cout << "\nChoose what you want to Calculate: " <<endl;
        cout << "1.calculate the area of square " << endl;
        cout << "2.calculate the area of triangle " << endl;
        cout << "3.calculate the area of circle " << endl;
        cout << "4.Quit " << endl;
        cin >>choice;
        
        if (choice==1){
            double side;
            cout << "Enter side of square: ";
            cin >> side;

            square sq(side);
            
            cout << "Area of square: " << Area::calcSquareArea(sq) <<endl;

        }
        else if (choice==2){
            double base;
            double height;

            cout << "Enter a base of a triangle: ";
            cin >> base;

            cout << "Enter a height of a triangle: ";
            cin >> height;

            triangle t(base,height);
            cout << "Area of a triangle: "<< Area::calcTriangleArea(t)<<endl;
            

        }else if (choice==3){
            double radius;
            cout << "Enter a radius: " <<endl;
            cin >> radius;

            circle cir(radius);
            cout << "Area of circle:" << Area::calcCircleArea(cir)<<endl;

        }else if (choice!=4) {
            cout << "Invalid choice,please try again";
        }else{
            cout<< "exiting the program. Good bye!";
        }
    } while (choice !=4 );
    
    return 0;
}