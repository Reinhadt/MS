import React from 'react'

const CatFilter = (props) => {
    return (
        <select onChange={props.change} name="catfilter" id="">
            <option value="---">---</option>
            {
                props.cats.map( categoria => {
                    return(
                        <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                    )
                })
            }
        </select>
    )
}

export default CatFilter;
