#include <iostream>
#include <random>
using namespace std;

int main(){
    srand(time(NULL));
    int daysUntilExpiration = (rand()% 12);

    if (daysUntilExpiration<=10){
        cout << "Your subscription will expire soon. Renew now!" << endl;
    }else if (daysUntilExpiration<=5){
        cout << "Your subscription expires in " ;
        cout << daysUntilExpiration ;
        cout<< +" Renew now and save 10% " << endl;
    
    }else if (daysUntilExpiration==1){
        cout << "Your subscription expires within a day! Renew now and save 20%" << endl;
    }else if (daysUntilExpiration==0){
        cout << "Your subscription has expired" <<endl;
    }else if (daysUntilExpiration>10){
        cout << "You have an active subscription" << endl;
    }
return 0;
}