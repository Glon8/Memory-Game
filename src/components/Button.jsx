function Button({ value, asClick, bColor, bgColor, c, w, h, r, font, cusMain }) {
    return (<a className={`${w ?? 'w-per-20'} ${h ?? 'h-fix-2'}
        flex f-column ${r ?? 'r-1'} b-w-1 b-solid
        a-items-c j-content-c t-d-none b-c-${bColor ?? 'dark'}
        bg-c-${bgColor ?? 'light'} c-${c ?? 'dark'} 
        ${font ?? 'font-qilka-bold'} ${cusMain ?? ''}`}
        href='#' onClick={(e) => {
            e.preventDefault();

            asClick?.();
        }}>
        {value ?? ''}
    </a>)
}

export default Button