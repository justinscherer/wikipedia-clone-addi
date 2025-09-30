import React from 'react'
import fftDiagram from '@/assets/images/fft-diagram.svg'

export function FFTPreview() {
  const openFFTArticle = (section?: string) => {
    const baseUrl = 'https://en.wikipedia.org/wiki/Fast_Fourier_transform'
    const url = section ? `${baseUrl}#${section}` : baseUrl
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="preview-card">
      <h3>Fast Fourier transform (FFT)</h3>
      
      <p className="mb-4">
        A fast Fourier transform (FFT) is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). A Fourier transform converts a signal from its original domain (often time or space) to a representation in the frequency domain and vice versa.
      </p>
      
      <div className="mb-4">
        <img 
          src={fftDiagram} 
          alt="FFT Algorithm Diagram" 
          className="w-full h-auto max-h-32 object-contain border border-border rounded"
        />
      </div>
      
      <div className="space-y-2">
        <div 
          className="p-3 border border-border rounded cursor-pointer hover:bg-muted transition-colors"
          onClick={() => openFFTArticle()}
        >
          <h4 className="font-semibold text-sm mb-1">Introduction</h4>
          <p className="text-xs text-muted-foreground">
            Fast Fourier transforms are widely used for applications in engineering, music, science, and mathematics. The basic ideas were popularized in 1965, but some algorithms had been derived as early as 1805. In 1994, Gilbert Strang described the FFT as "the most important numerical algorithm of our lifetime", and it was included in Top 10 Algorithms of 20th Century by the IEEE magazine Computing in Science & Engineering.
          </p>
        </div>
        
        <div 
          className="p-3 border border-border rounded cursor-pointer hover:bg-muted transition-colors"
          onClick={() => openFFTArticle('Applications')}
        >
          <h4 className="font-semibold text-sm mb-1">Applications</h4>
          <p className="text-xs text-muted-foreground">
            The FFT is used in digital recording, sampling, additive synthesis and pitch correction software.
          </p>
        </div>
      </div>
    </div>
  )
}