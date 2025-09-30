import { WikipediaLink } from './WikipediaLink'
import { FFTPreview } from './FFTPreview'

export function ArticleContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 wiki-article">
          <div className="text-sm text-muted-foreground mb-4">
            From Wikipedia, the free encyclopedia
          </div>
          
          <p>
            <strong>Additive synthesis</strong> is a <WikipediaLink href="https://en.wikipedia.org/wiki/Sound_synthesis">sound synthesis</WikipediaLink> technique that creates timbre by adding sine waves together.<sup>[1]</sup><sup>[2]</sup>
          </p>

          <p>
            The timbre of musical instruments can be considered in the light of Fourier theory to consist of multiple <WikipediaLink href="https://en.wikipedia.org/wiki/Harmonic">harmonic</WikipediaLink> or inharmonic <em>partials</em> or <WikipediaLink href="https://en.wikipedia.org/wiki/Overtone">overtones</WikipediaLink>. Each partial is a sine wave of different frequency and <WikipediaLink href="https://en.wikipedia.org/wiki/Amplitude">amplitude</WikipediaLink> that swells and decays over time due to <WikipediaLink href="https://en.wikipedia.org/wiki/Modulation">modulation</WikipediaLink> from an <WikipediaLink href="https://en.wikipedia.org/wiki/Low_frequency_oscillator">LFO</WikipediaLink>, <WikipediaLink href="https://en.wikipedia.org/wiki/ADSR_envelope">ADSR envelope</WikipediaLink>, <WikipediaLink href="https://en.wikipedia.org/wiki/Low_frequency_oscillator">low frequency oscillator</WikipediaLink>.
          </p>

          <p>
            Additive synthesis most directly generates sound by adding the output of multiple sine wave generators. Alternative implementations may use pre-computed wavetables or the inverse <WikipediaLink 
              href="https://en.wikipedia.org/wiki/Fast_Fourier_transform"
              previewContent={<FFTPreview />}
            >fast Fourier transform</WikipediaLink>.
          </p>

          <h2>Explanation</h2>
          
          <p>
            The sounds that are heard in everyday life are not characterized by a single frequency. Instead, they consist of a sum of pure sine frequencies, each one at a different <WikipediaLink href="https://en.wikipedia.org/wiki/Amplitude">amplitude</WikipediaLink>. When humans hear these sounds (e.g. water splashing, leaves rustling, etc.) and when pieces of paper are scattered on the floor, we may then ask how we can reduce these real-world sounds to their component pure frequencies, and their relative amplitudes, and how the relative amplitudes change with time. The mathematical method for doing this is known as Fourier analysis, and the resulting set of pure frequencies and amplitudes is called the <WikipediaLink href="https://en.wikipedia.org/wiki/Fourier_series">Fourier series</WikipediaLink> of the sound.
          </p>

          <p>
            In the case of a musical note, the lowest frequency of its timbre is the fundamental frequency, and defines what pitch the note is playing at that fundamental frequency (e.g. 440 Hz for concert A). However, the fundamental frequency may be accompanied by numerous other frequencies as well. The set of the remaining frequencies is called the <WikipediaLink href="https://en.wikipedia.org/wiki/Overtone">overtones</WikipediaLink> (or the <WikipediaLink href="https://en.wikipedia.org/wiki/Harmonic">harmonics</WikipediaLink>, if their frequencies are integer multiples of the fundamental frequency) of the sound.<sup>[4]</sup> In other words, the fundamental frequency alone is responsible for the pitch of the note, while the overtones define the timbre of the note.
          </p>

          <p>
            Additive synthesis aims to exploit this property of sound in order to construct timbre from the ground up. By adding together pure frequencies (sine waves) of varying frequencies and amplitudes, we can precisely define the timbre of the sound that we want to create.
          </p>

          <h2>Implementation</h2>

          <p>
            Additive synthesis can be implemented using a bank of sinusoidal oscillators, each producing a sine wave of different frequency, amplitude and phase. The key to additive synthesis is that these sine waves are mixed together to create complex timbres.
          </p>

          <p>
            Modern implementations often use <WikipediaLink href="https://en.wikipedia.org/wiki/Digital_signal_processing">digital signal processing</WikipediaLink> techniques, including:
          </p>

          <ul>
            <li>Direct oscillator banks</li>
            <li>Wavetable synthesis</li>
            <li>Inverse FFT methods</li>
            <li>Granular synthesis techniques</li>
          </ul>

          <h2>Applications</h2>

          <p>
            Additive synthesis is used in various contexts:
          </p>

          <ul>
            <li><strong>Electronic music</strong> - Creating unique timbres and textures</li>
            <li><strong>Audio restoration</strong> - Reconstructing damaged audio signals</li>
            <li><strong>Sound design</strong> - Crafting specific audio effects</li>
            <li><strong>Musical instrument modeling</strong> - Recreating acoustic instruments digitally</li>
          </ul>

          <h2>See also</h2>

          <ul>
            <li><WikipediaLink href="https://en.wikipedia.org/wiki/Subtractive_synthesis">Subtractive synthesis</WikipediaLink></li>
            <li><WikipediaLink href="https://en.wikipedia.org/wiki/FM_synthesis">Frequency modulation synthesis</WikipediaLink></li>
            <li><WikipediaLink href="https://en.wikipedia.org/wiki/Granular_synthesis">Granular synthesis</WikipediaLink></li>
            <li><WikipediaLink href="https://en.wikipedia.org/wiki/Physical_modelling_synthesis">Physical modelling synthesis</WikipediaLink></li>
          </ul>

          <h2>References</h2>

          <ol className="text-sm">
            <li>Dodge, Charles; Jerse, Thomas A. (1997). <em>Computer Music: Synthesis, Composition, and Performance</em>. New York: Schirmer Books.</li>
            <li>Roads, Curtis (1996). <em>The Computer Music Tutorial</em>. Cambridge, MA: MIT Press.</li>
          </ol>
        </main>

        <aside className="lg:col-span-1">
          <div className="wiki-sidebar p-4 sticky top-4">
            <h3 className="font-bold mb-3">Contents</h3>
            <nav className="space-y-2 text-sm">
              <a href="#explanation" className="block wiki-link">1 Explanation</a>
              <a href="#implementation" className="block wiki-link">2 Implementation</a>
              <a href="#applications" className="block wiki-link">3 Applications</a>
              <a href="#see-also" className="block wiki-link">4 See also</a>
              <a href="#references" className="block wiki-link">5 References</a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}