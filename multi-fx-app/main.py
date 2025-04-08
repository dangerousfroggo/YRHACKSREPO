import pyaudio
import numpy as np
import psutil, os

# Boost the process priority
psutil.Process(os.getpid()).nice(psutil.HIGH_PRIORITY_CLASS)

# Constants
CHUNK = 1
RATE = 44100
LEN = 50
GAIN = 8.0  # Volume multiplier
MAX_DISTORTION = 5000  # Threshold for clipping distortion

# Initialize PyAudio
p = pyaudio.PyAudio()

# Open input and output streams
stream = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, input=True, frames_per_buffer=CHUNK)
player = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, output=True, frames_per_buffer=CHUNK)

# Set the initial effect (can be changed to 'distortion' for distortion effect)
currentEffect = 'distortion'

# Function to apply the clean effect (just pass-through)
def clean_effect(data):
    return np.clip(data * GAIN, -32768, 32767).astype(np.int16)

# Function to apply distortion effect
def distortion_effect(data):
    # Apply gain and clip to simulate distortion
    distorted = np.clip(data * GAIN, -MAX_DISTORTION, MAX_DISTORTION)
    return distorted.astype(np.int16)

# Main loop for audio processing
for i in range(int(LEN * RATE / CHUNK)):  # Go for LEN seconds
    # Read data from input stream
    data = np.frombuffer(stream.read(CHUNK, exception_on_overflow=False), dtype=np.int16)
    
    # Apply the selected effect
    if currentEffect == 'clean':
        output_data = clean_effect(data)
    elif currentEffect == 'distortion':
        output_data = distortion_effect(data)
    
    # Write the processed audio data to the output stream
    player.write(output_data.tobytes(), CHUNK)

# Clean up and close streams
stream.stop_stream()
stream.close()
player.stop_stream()
player.close()
p.terminate()
