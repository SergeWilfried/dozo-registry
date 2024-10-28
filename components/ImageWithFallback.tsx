'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { ImageOff } from 'lucide-react'

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-200">
        <ImageOff className="w-12 h-12 text-gray-400" aria-hidden="true" />
        <span className="sr-only">{alt}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
      onError={handleError}
    />
  )
}