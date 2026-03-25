type ButtonProps = {
    text: string
    className?: string
    disableHover?: boolean 
}

export function Button({ text, className, disableHover }: ButtonProps) {
    return (
        <button className={`
            bg-[#FFB00A] p-2 rounded-lg text-xl font-bold px-4 transition
            ${disableHover ? '' : 'hover:bg-[#D99507]'} 
            ${className || ''}
        `}>
            {text}
        </button>
    )
}