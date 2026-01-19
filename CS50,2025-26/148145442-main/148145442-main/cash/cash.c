#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int cents;

    // Prompt user until a non-negative integer is entered
    do
    {
        cents = get_int("Change owed: ");
    }
    while (cents < 0);

    int coins = 0;

    // Use greedy algorithm to calculate minimum coins
    coins += cents / 25;
    cents %= 25;

    coins += cents / 10;
    cents %= 10;

    coins += cents / 5;
    cents %= 5;

    coins += cents; // Remaining pennies

    // Output result
    printf("%d\n", coins);
}
