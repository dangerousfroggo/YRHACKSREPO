import pyaudio
import numpy as np
import psutil, os
psutil.Process(os.getpid()).nice(psutil.HIGH_PRIORITY_CLASS)

CHUNK = 3
RATE = 22050
LEN = 100
GAIN = 8.0  # Volume multiplier (e.g., 2.0 = 2x louder)

p = pyaudio.PyAudio()

stream = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, input=True, frames_per_buffer=CHUNK)
player = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, output=True, frames_per_buffer=CHUNK)

for i in range(int(LEN * RATE / CHUNK)):  # Go for LEN seconds
    data = np.frombuffer(stream.read(CHUNK, exception_on_overflow=False), dtype=np.int16)

    
    # Apply gain and clip to prevent overflow
    louder = np.clip(data * GAIN, -32768, 32767).astype(np.int16)
    
    player.write(louder.tobytes(), CHUNK)

stream.stop_stream()
stream.close()
player.stop_stream()
player.close()
p.terminate()
