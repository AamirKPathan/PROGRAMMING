#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int height;

    // Prompt user until a valid height is entered
    do
    {
        height = get_int("Enter the height of the pyramid (1-8): ");
    }
    while (height < 1 || height > 8);

    // Loop through each row
    for (int row = 0; row < height; row++)
    {
        // Print spaces before left pyramid
        for (int space = 0; space < height - row - 1; space++)
        {
            printf(" ");
        }

        // Print left pyramid hashes
        for (int hash = 0; hash <= row; hash++)
        {
            printf("#");
        }

        // Print gap
        printf("  ");

        // Print right pyramid hashes
        for (int hash = 0; hash <= row; hash++)
        {
            printf("#");
        }

        // New line
        printf("\n");
    }
}
