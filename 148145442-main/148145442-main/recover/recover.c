#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>

#define BLOCK_SIZE 512

int main(int argc, char *argv[])
{
    // Check for correct usage
    if (argc != 2)
    {
        fprintf(stderr, "Usage: ./recover IMAGE\n");
        return 1;
    }

    // Open the forensic image
    FILE *input = fopen(argv[1], "r");
    if (input == NULL)
    {
        fprintf(stderr, "Could not open file %s.\n", argv[1]);
        return 1;
    }

    // Buffer to store a block
    uint8_t buffer[BLOCK_SIZE];

    // File pointer for output JPEGs
    FILE *output = NULL;

    // Counter for JPEG filenames
    int file_count = 0;

    // Filename buffer
    char filename[8]; // e.g., "000.jpg"

    // Flag to track if we're currently writing a JPEG
    bool writing_jpeg = false;

    // Read blocks until end of file
    while (fread(buffer, sizeof(uint8_t), BLOCK_SIZE, input) == BLOCK_SIZE)
    {
        // Check for JPEG signature
        bool is_jpeg_start =
            buffer[0] == 0xff &&
            buffer[1] == 0xd8 &&
            buffer[2] == 0xff &&
            (buffer[3] & 0xf0) == 0xe0;

        if (is_jpeg_start)
        {
            // If already writing a JPEG, close it
            if (writing_jpeg)
            {
                fclose(output);
            }

            // Start a new JPEG
            sprintf(filename, "%03i.jpg", file_count++);
            output = fopen(filename, "w");
            if (output == NULL)
            {
                fprintf(stderr, "Could not create output file %s.\n", filename);
                fclose(input);
                return 1;
            }

            writing_jpeg = true;
        }

        // If currently writing a JPEG, write the block
        if (writing_jpeg)
        {
            fwrite(buffer, sizeof(uint8_t), BLOCK_SIZE, output);
        }
    }

    // Close any remaining open files
    if (output != NULL)
    {
        fclose(output);
    }

    fclose(input);
    return 0;
}
