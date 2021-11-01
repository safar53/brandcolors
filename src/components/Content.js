import { useContext } from 'react';
import Search from './Search';
import Brand from './Brand';
import Download from './Download';
import MainContext from '../MainContext';
import { List, AutoSizer } from 'react-virtualized';

const Content = () => {

    const { brands, selectedBrands } = useContext(MainContext)

    const rowRenderer = ({ key, index, style, isScrolling, isVisible }) => {
        return (
            <div style={style} key={key}>
                <Brand brand={brands[index]} />
            </div>
        )
    }

    return (
        <main className="content">
            <header className="header">
                <Search />
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            width={width}
                            height={height}
                            rowCount={brands.length}
                            rowHeight={113}
                            rowRenderer={rowRenderer}
                        />
                    )}
                </AutoSizer>

            </section>
        </main>
    )
}

export default Content
