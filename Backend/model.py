from transformers import BartForConditionalGeneration, BartTokenizer
import textwrap
import sys

def text_summarizer_from_pdf(text):
    model_name = "facebook/bart-large-cnn"
    model = BartForConditionalGeneration.from_pretrained(model_name)
    tokenizer = BartTokenizer.from_pretrained(model_name)

    inputs = tokenizer.encode(text, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(inputs, max_length=500, min_length=20, length_penalty=2.0, num_beams=4, early_stopping=True)

    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    formatted_summary = "\n".join(textwrap.wrap(summary, width=80))
    return formatted_summary


if __name__ == '__main__':
    input_text = sys.argv[1]
    result = text_summarizer_from_pdf(input_text)
    print(result)

