import csv
import sys

def main():
    # Check for proper usage
    if len(sys.argv) != 3:
        print("Usage: python dna.py data.csv sequence.txt")
        sys.exit(1)

    # Read database file into a variable
    with open(sys.argv[1], newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        database = list(reader)
        str_names = reader.fieldnames[1:]  # Skip the 'name' column

    # Read DNA sequence file into a variable
    with open(sys.argv[2], 'r') as txtfile:
        dna_sequence = txtfile.read()

    # Find longest match of each STR in DNA sequence
    str_counts = {}
    for str_seq in str_names:
        str_counts[str_seq] = longest_match(dna_sequence, str_seq)

    # Check database for matching profiles
    for person in database:
        match = all(int(person[str_seq]) == str_counts[str_seq] for str_seq in str_names)
        if match:
            print(person['name'])
            return

    print("No match")

def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""
    longest_run = 0
    sub_len = len(subsequence)
    seq_len = len(sequence)

    for i in range(seq_len):
        count = 0
        while sequence[i + count * sub_len : i + (count + 1) * sub_len] == subsequence:
            count += 1
        longest_run = max(longest_run, count)

    return longest_run

if __name__ == "__main__":
    main()
