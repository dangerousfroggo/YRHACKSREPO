import sys
import pyaudio
import numpy as np
import psutil, os
# psutil.Process(os.getpid()).nice(psutil.HIGH_PRIORITY_CLASS)

CHUNK = 3
RATE = 96000
LEN = 100
GAIN = 20.0  
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

        
    
        self.type = type            # 3
        self.volume = volume        # 0.0 to 1.0
        self.gain = gain            # 0.0 to 1.0
        self.enabled = enabled      # True or False

    def process(self, samples):
        if not self.enabled:
            return samples
        
        # Apply gain to amplify the input
        amplified = samples * (1.0 + self.gain * 10)

        # Hard clipping
        clipped = np.clip(amplified, -32768, 32767)

        # Blend with original if dry/wet mix
        if self.type == 0:  # wet mix
            mixed = clipped * self.volume * 10 + samples * (1 - self.volume)
        elif self.type == 1:  # dry only (just original)
            mixed = samples
        else:
            mixed = clipped
        
        # Apply additional gain to the processed output
        final_output = np.clip(mixed * GAIN, -32768, 32767)  # Loudness boost

        return final_output.astype(np.int16)
class Clean:
    def process(self,samples):
        return samples
clean1 = Clean()

        



distortion1 = Distortion(1, 1, 10, True)

        
    
currentEffect = distortion1


for i in range(int(LEN * RATE / CHUNK)):
    data = np.frombuffer(stream.read(CHUNK, exception_on_overflow=False), dtype=np.int16)

    data = currentEffect.process(data) 

    player.write(data.tobytes(), CHUNK)

stream.stop_stream()
stream.close()
player.stop_stream()
player.close()
p.terminate()

# hi
