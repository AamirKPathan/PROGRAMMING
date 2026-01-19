#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int height;

    // Prompt user until a valid height (1–8) is entered
    do
    {
        height = get_int("Height (1–8): ");
    }
    while (height < 1 || height > 8);

    // Build the pyramid
    for (int row = 0; row < height; row++)
    {
        // Print spaces
        for (int space = 0; space < height - row - 1; space++)
        {
            printf(" ");
        }

        // Print hashes
        for (int hash = 0; hash <= row; hash++)
        {
            printf("#");
        }

        // Move to next line
        printf("\n");
    }
}
