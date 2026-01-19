from cs50 import get_string

def count_letters(text):
    return sum(1 for char in text if char.isalpha())

def count_words(text):
    return len(text.split())

def count_sentences(text):
    return sum(1 for char in text if char in ['.', '!', '?'])

def compute_grade(text):
    letters = count_letters(text)
    words = count_words(text)
    sentences = count_sentences(text)

    L = (letters / words) * 100
    S = (sentences / words) * 100

    index = round(0.0588 * L - 0.296 * S - 15.8)

    if index < 1:
        return "Before Grade 1"
    elif index >= 16:
        return "Grade 16+"
    else:
        return f"Grade {index}"

def main():
    text = get_string("Text: ")
    grade = compute_grade(text)
    print(grade)

if __name__ == "__main__":
    main()
