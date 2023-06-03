import { useState } from 'react';

const CreateCard = () => {

    const [text, SetText] = useState({
        head: '',
        details : '',
        image: '',
        entry : ''
    });

    const change = (e: { target: { name: any; value: any; }; }) => {
        
        SetText({ ...text, [e.target.name] : e.target.value })

    }

    return (
        <>
            
            <input type="text" className='form-control' name="head" onChange={change} />
        
            <input type="text" className='form-control' name="details" onChange={change} />
        
            <input type="number" className='form-control' name="entry" onChange={change} />

            <input type="submit" className='form-control' name="submit" value="Post" />


            <p>{text.head}</p>

            
        </>
    )

}


export default function display() {
    return(
        <>
            <CreateCard />
        </>
    )
}