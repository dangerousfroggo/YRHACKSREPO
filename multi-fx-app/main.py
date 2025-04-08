import sys
import pyaudio
import numpy as np
import psutil, os
# psutil.Process(os.getpid()).nice(psutil.HIGH_PRIORITY_CLASS)

CHUNK = 3
RATE = 96000
LEN = 100
GAIN = 8.0  
p = pyaudio.PyAudio()

stream = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, input=True, frames_per_buffer=CHUNK)
player = p.open(format=pyaudio.paInt16, channels=1, rate=RATE, output=True, frames_per_buffer=CHUNK)

currentEffect = None

# Default values
VOL = int(sys.argv[1]) if len(sys.argv) > 1 else 1
GAIN = int(sys.argv[2]) if len(sys.argv) > 2 else 1
WET_OR_DRY = int(sys.argv[3]) if len(sys.argv) > 3 else 1

print(f"Starting distortion with VOL={VOL}, GAIN={GAIN}, WET_OR_DRY={WET_OR_DRY}")

class Distortion:
    def __init__(self, type, volume, gain, enabled):
        self.type = type
        self.volume = volume
        self.gain = gain
        self.enabled = enabled
    def process():
        pass

distortion1 = Distortion("distortion", VOL, GAIN, WET_OR_DRY)

        
    


for i in range(int(LEN * RATE / CHUNK)):  # Go for LEN seconds
    data = np.frombuffer(stream.read(CHUNK, exception_on_overflow=False), dtype=np.int16)

    
    # Apply gain and clip to prevent coverflow
    louder = np.clip(data * GAIN, -32768, 32767).astype(np.int16)
    
    player.write(louder.tobytes(), CHUNK)

stream.stop_stream()
stream.close()
player.stop_stream()
player.close()
p.terminate()

# hi