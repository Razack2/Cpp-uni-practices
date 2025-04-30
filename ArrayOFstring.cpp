#include <iostream>
using namespace std;

int main(){
    string numbers[]={"B123","C234","A345","C15","B177","G3003","C235","B179"};
    int length = sizeof(numbers)/sizeof(numbers[0]);
  
        

        for (int i = 0; i < length; i++)
          // cout << numbers[i];
          
        {
            if (numbers[i][0]='B'){
                cout << numbers[i] << " " <<endl;
            }
             
        }

    return 0;


}