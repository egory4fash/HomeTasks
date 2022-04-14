import {Box, Slider} from '@mui/material'
import React from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    handleChange2?: (event: Event,
                     newValue: number | number[],
                     activeThumb: number,) => void
    value2?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        handleChange2, value2,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Box
                className={s.box} sx={{width: 300}}>
                <Slider
                    value={value2}
                    onChange={handleChange2}

                    disableSwap
                    valueLabelDisplay="on"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
