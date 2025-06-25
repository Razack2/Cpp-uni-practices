#include <iostream>
#include <random>
using namespace std;

int main(){
    srand(time(NULL));
    int daysUntilExpiration = (rand()% 12);

    switch (daysUntilExpiration)
    {
    case 1:
        daysUntilExpiration<=10;
        cout << "Your subscription will expire soon. Renew now!" << endl;
        break;

    case 2:
        daysUntilExpiration<=5;
        cout << "Your subscription expires in " ;
        cout << daysUntilExpiration ;
        cout<< +" Renew now and save 10% " << endl;
        break;

    case 3:
        daysUntilExpiration==1;
        cout << "Your subscription expires within a day! Renew now and save 20%" << endl;
        break;

    case 4:
        daysUntilExpiration==0;
        cout << "Your subscription has expired" <<endl;
    case 5:
        daysUntilExpiration>10;
        cout << "You have an active subscription" << endl;
        default:
        break;
    }
    return 0;
}