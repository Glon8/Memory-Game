function Button({ value, asClick, b_c, bg_c, c, w, h, r, b_w, b, f, cus }) {
    return (<a className={`${w ?? 'w-per-20'} ${h ?? 'h-fix-2'}
        flex f-column ${r ?? 'r-1'} b-w-${b_w ?? '1'} b-${b ?? 'solid'}
        a-items-c j-content-c t-d-none b-c-${b_c ?? 'dark'}
        bg-c-${bg_c ?? 'light'} c-${c ?? 'dark'} 
        f-${f ?? ''} ${cus ?? ''}`}
        href='#' onClick={(e) => {
            e.preventDefault();

            asClick?.();
        }}>
        {value ?? ''}
    </a>)
}

export default Button