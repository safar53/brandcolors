import { useContext, useEffect } from 'react';
import Download from './Download';
import Brand from './Brand';
import Loader from './Loader';
import MainContext from '../MainContext';
import LazyLoad from 'react-lazyload';
import { useParams, useHistory, Link } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';


const Collection = () => {

    const { slugs } = useParams()
    const history = useHistory()
    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
    const clearSelectedBrands = () => {
        setSelectedBrands([])
        history.push("/")
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

    return (
        <main className="content">
            <header className="header">
                <Link to="/" onClick={clearSelectedBrands}>
                    <a className="back-btn">
                        <GrLinkPrevious />
                        All brands
                    </a>
                </Link>
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={brand.slug} once="true" overflow="true" placeholder={<Loader />}>
                            <Brand brand={brand} />
                        </LazyLoad>
                    )
                })}
            </section>
        </main>
    )
}

export default Collection
