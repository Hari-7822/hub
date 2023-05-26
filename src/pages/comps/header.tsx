import Link from 'next/link';


const Header = () => {
    return(
        <>
        
            <h2 className="header__head">Auction Hub</h2>

            <div className='header__nav'>
                <Link href={"/page"}>page</Link>
            </div>

        </>
    )
}

export default Header;