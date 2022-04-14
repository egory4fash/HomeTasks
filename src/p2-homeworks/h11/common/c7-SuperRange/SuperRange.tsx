import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number | number []) => void
    value1?:any,
    minValue?:any,
    maxValue?:any,
    step?:any
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        value1,
        minValue,maxValue,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {



    return (
        <>
            <Box className = {s.box}
                width={'300px'}>
                <Slider
                    onChange={(event,value) => {onChangeRange(value)}}
                    defaultValue={value1}
                    value={value1}
                    valueLabelDisplay="on"
                />
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
