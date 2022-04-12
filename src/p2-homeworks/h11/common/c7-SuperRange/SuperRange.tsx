import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value1?:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: any) => {
        console.log(e)
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget?.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box width={'300px'}>
                <Slider
                    onChange={onChangeCallback}
                    defaultValue={restProps.value1}
                    min={0}
                    max={130}
                    value={restProps.value1}
                ></Slider>
            </Box>

            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}
            {/*    value={restProps.value }*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
}

export default SuperRange
