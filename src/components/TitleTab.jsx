function TitleTab({ value, fontSize, fontWeight, c, m, font, cusMain }) {
    return (<label className={`${m ?? 'mt-2'} f-w-${fontWeight ?? '1'}
        f-s-${fontSize ?? '4'} c-${c ?? 'dark'}
        ${font ?? ''} ${cusMain ?? ''}`}
    >{value ?? ''}</label>)
}

export default TitleTab