import Image from 'next/image';


const Card = () => {

    return(
        <>
                
                <Image 
                    src="https://unsplash.it/80/80"
                    height={150}
                    width={100}
                    
                    alt="card"
                    loading ="lazy"
                    className='card__image' />

                <h5 className='card__text'>Card_1</h5>
                <p className='card__details'>card details</p>

        </>
    )

}

export default Card;