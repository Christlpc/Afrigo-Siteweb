"use client"

interface Scene3DProps {
  children: React.ReactNode
  className?: string
}

export function Scene3D({ children, className = "" }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className} flex items-center justify-center`}>
      {children}
    </div>
  )
}

