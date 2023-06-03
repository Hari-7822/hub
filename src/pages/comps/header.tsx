import Link from 'next/link';


const Header = () => {
    return(
        <>
        
            <div className="header__main">
                <h2 className="header__main--head">Auction Hub</h2>
                <div className='header__main--nav'>
                    <div className="header__main--nav-elements container">
                    
                        <Link href={"/page"}>page</Link>
                        <Link href={'/page2'}>Page2</Link>
                    
                    </div>
                </div>
            </div>

            <div className="header__user">
                <h4 className="header__user--text">Welcome User</h4>
            </div>
        </>
    )
}

export default Header;