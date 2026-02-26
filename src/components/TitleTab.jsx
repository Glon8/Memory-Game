function TitleTab({ value, f_s, f_w, c, m, f, cus }) {
    return (<label className={`${m ?? 'mt-2'} f-w-${f_w ?? '1'}
        f-s-${f_s ?? '4'} c-${c ?? 'dark'}
        f-${f ?? ''} ${cus ?? ''}`}
    >{value ?? ''}</label>)
}

export default TitleTab