#include <stdio.h>
#include <cs50.h>

int get_length(long number);
int get_first_digits(long number, int digits);
bool is_valid_luhn(long number);

int main(void)
{
    // Prompt user for credit card number
    long number = get_long("Number: ");

    // Check if the number is valid using Luhn's algorithm
    if (!is_valid_luhn(number))
    {
        printf("INVALID\n");
        return 0;
    }

    // Get length of the number
    int length = get_length(number);

    // Get starting digits
    int first_two = get_first_digits(number, 2);
    int first_one = get_first_digits(number, 1);

    // Determine card type
    if ((length == 15) && (first_two == 34 || first_two == 37))
    {
        printf("AMEX\n");
    }
    else if ((length == 16) && (first_two >= 51 && first_two <= 55))
    {
        printf("MASTERCARD\n");
    }
    else if ((length == 13 || length == 16) && (first_one == 4))
    {
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    }
}

// Function to calculate the length of the number
int get_length(long number)
{
    int length = 0;
    while (number > 0)
    {
        number /= 10;
        length++;
    }
    return length;
}

// Function to get the first n digits of the number
int get_first_digits(long number, int digits)
{
    while (number >= 10 && get_length(number) > digits)
    {
        number /= 10;
    }
    return (int) number;
}

// Function to validate number using Luhn's algorithm
bool is_valid_luhn(long number)
{
    int sum = 0;
    bool alternate = false;

    while (number > 0)
    {
        int digit = number % 10;

        if (alternate)
        {
            digit *= 2;
            sum += digit / 10 + digit % 10;
        }
        else
        {
            sum += digit;
        }

        alternate = !alternate;
        number /= 10;
    }

    return (sum % 10 == 0);
}
