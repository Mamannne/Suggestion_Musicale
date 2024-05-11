import os
from pyncd import ncd

def best(input_text):
    # Create a temporary file with the input text
    closest_artist = None
    closest_distance = float('inf')

    input_text = input_text.lower()  # Convert input text to lowercase for comparison

    # Loop through all folders (artists) in the lyrics directory
    for artist_folder in os.listdir("./lyrics"):
        print(artist_folder)
        artist_path = os.path.join("./lyrics", artist_folder)
        
        # Loop through all files (songs) in the artist folder
        for filename in os.listdir(artist_path+"/0"):
            file_path = os.path.join(artist_path+"/0", filename)
            if os.path.isfile(file_path) and filename.endswith('.txt'):
                with open(file_path, 'r', encoding='utf-8') as file:
                    text = file.read().lower()  # Convert text from file to lowercase for comparison
                    distance = ncd(input_text, text)
                    print(distance)
                    # Update closest artist if current distance is smaller
                    if distance < closest_distance:
                        closest_distance = distance
                        closest_artist = artist_folder
    
    return closest_artist

# Example usage:
if __name__ == "__main__":
    input_text = "test test"
    closest_artist = best(input_text)
    print("Closest artist:", closest_artist)


