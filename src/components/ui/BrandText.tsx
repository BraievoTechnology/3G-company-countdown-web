import React from 'react'
interface BrandTextProps {
    className?: string
}
const BrandText: React.FC<BrandTextProps> = ({ className = '' }) => {
    return (
        <span
            className={`font-['Bodoni_Moda'] ${className}`}
            style={{
                fontFamily: "'Bodoni Moda', serif",
            }}
        >
      3G Consultants
    </span>
    )
}
export default BrandText
