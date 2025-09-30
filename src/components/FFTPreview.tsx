import React from 'react'
import fftDiagram from '@/assets/images/fft-diagram.svg'

export function FFTPreview() {
  const openFFTArticle = (section?: string) => {
    const baseUrl = 'https://en.wikipedia.org/wiki/Fast_Fourier_transform'
    const url = section ? `${baseUrl}#${section}` : baseUrl
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-[700px] h-[300px] bg-card border border-border rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 border-b border-border">
        <h3 className="text-lg font-bold">Fast Fourier transform (FFT)</h3>
      </div>
      
      {/* Main content - landscape layout */}
      <div className="flex h-[calc(100%-48px)]">
        {/* Left side - Image and introduction */}
        <div className="w-1/2 p-4 border-r border-border">
          <p className="text-sm mb-3 leading-relaxed">
            A fast Fourier transform (FFT) is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). A Fourier transform converts a signal from its original domain (often time or space) to a representation in the frequency domain and vice versa.
          </p>
          
          <div className="flex justify-center">
            <img 
              src={fftDiagram} 
              alt="FFT Algorithm Diagram" 
              className="max-w-full max-h-32 object-contain border border-border rounded"
            />
          </div>
        </div>
        
        {/* Right side - Tappable sections */}
        <div className="w-1/2 p-4 space-y-3">
          <div 
            className="p-3 border border-border rounded cursor-pointer hover:bg-muted transition-colors h-[calc(50%-6px)]"
            onClick={() => openFFTArticle()}
          >
            <h4 className="font-semibold text-sm mb-2 text-primary">Introduction</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fast Fourier transforms are widely used for applications in engineering, music, science, and mathematics. The basic ideas were popularized in 1965, but some algorithms had been derived as early as 1805. In 1994, Gilbert Strang described the FFT as "the most important numerical algorithm of our lifetime", and it was included in Top 10 Algorithms of 20th Century by the IEEE magazine Computing in Science & Engineering.
            </p>
          </div>
          
          <div 
            className="p-3 border border-border rounded cursor-pointer hover:bg-muted transition-colors h-[calc(50%-6px)]"
            onClick={() => openFFTArticle('Applications')}
          >
            <h4 className="font-semibold text-sm mb-2 text-primary">Applications</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The FFT is used in digital recording, sampling, additive synthesis and pitch correction software. It enables efficient signal processing in audio equipment, telecommunications, and scientific computing applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}