#include <iostream>
#include <fstream>
#include <string>
#include <cctype>  // For isalpha, toupper
#include <sstream> // For istringstream
using namespace std;

// Function to count vowels
int countVowels(const string& text) {
    int count = 0;
    for (char ch : text) {
        ch = tolower(ch);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}

// Function to count words
int countWords(const string& text) {
    istringstream iss(text);
    string word;
    int count = 0;
    while (iss >> word) {
        count++;
    }
    return count;
}

// Function to reverse the text
string Reverse(const string& text) {
    string reversed = text;
    int n = reversed.length();
    
    for (int i = 0; i < n / 2; ++i) {
        swap(reversed[i], reversed[n - i - 1]);
    }
    return reversed;
}

// Function to capitalize second letter of each word
string capitalizeSecondLetter(const string& text) {
    istringstream iss(text);
    string word, result;
    while (iss >> word) {
        if (word.length() >= 2) {
            word[1] = toupper(word[1]);
        }
        result += word + " ";
    }
    if (!result.empty()) {
        result.pop_back(); // Remove last space
    }
    return result;
}

int main() {
    // Step (i): Read from file
    ifstream inFile("file.txt");
    if (!inFile) {
        cerr << "Error opening file!" << endl;
        return 1;
    }

    // Step (ii): Assign contents to fileData
    string fileData, line;
    while (getline(inFile, line)) {
        fileData += line + "\n";
    }
    inFile.close();

    // Remove the trailing newline if any
    if (!fileData.empty() && fileData.back() == '\n') {
        fileData.pop_back();
    }

    // Display file content
    cout << "Original Text:\n" << fileData << endl << endl;

    // Number of vowels
    cout << "Number of vowels: " << countVowels(fileData) << endl;

    // Number of words
    cout << "Number of words: " << countWords(fileData) << endl;

    // Reverse text
    cout << "\nReversed Text:\n" << Reverse(fileData) << endl;

    // Capitalize second letter of each word
    cout << "\nCapitalized Second Letter Text:\n" << capitalizeSecondLetter(fileData) << endl;

    return 0;
}
