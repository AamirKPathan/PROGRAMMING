#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

// Function prototype
bool only_digits(string s);
char rotate(char c, int k);

int main(int argc, string argv[])
{
    // Check for exactly one command-line argument
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Validate that the argument contains only digits
    if (!only_digits(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Convert key from string to int
    int key = atoi(argv[1]);

    // Prompt user for plaintext
    string plaintext = get_string("plaintext:  ");

    // Print ciphertext label
    printf("ciphertext: ");

    // Encrypt each character
    for (int i = 0, len = strlen(plaintext); i < len; i++)
    {
        printf("%c", rotate(plaintext[i], key));
    }

    // Print newline and exit
    printf("\n");
    return 0;
}

// Check if string contains only digits
bool only_digits(string s)
{
    for (int i = 0, len = strlen(s); i < len; i++)
    {
        if (!isdigit(s[i]))
        {
            return false;
        }
    }
    return true;
}

// Rotate character by key positions
char rotate(char c, int k)
{
    if (isupper(c))
    {
        return ((c - 'A' + k) % 26) + 'A';
    }
    else if (islower(c))
    {
        return ((c - 'a' + k) % 26) + 'a';
    }
    else
    {
        return c;
    }
}
