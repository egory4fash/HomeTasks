import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    const minValue = 30
    const maxValue = 100

    const [value1, setValue1] = useState<number | number []>(minValue)
    const [value2, setValue2] = useState<any>([minValue, maxValue])


    let onChangeRange = (value: number | number[]) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }


    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }


        setValue2(newValue)
        setValue1(newValue[0])
    };


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value1={value1}
                    minValue={minValue}
                    maxValue={maxValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    value2={value2}
                    handleChange2={handleChange2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
