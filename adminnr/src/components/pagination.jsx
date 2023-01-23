import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Pagination = ({ currentPage, setCurrentPage, maxPages }) => {

    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(parseInt(currentPage) + 1);
        }

    }

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(parseInt(currentPage) - 1);
        }
    }

    return (
        <div style={{ marginTop: '50px', paddingBottom: '50px' }}>
            {/* <button onClick={previousPage} style={{ display: 'inline', marginRight: '15px' }}><ArrowBackIcon fontSize='normal' /></button> */}
            {/* <a style={{ display: 'inline', marginRight: '15px' }} href="#!" onClick={previousPage}><i><ArrowBackIcon fontSize='medium' /></i></a> */}
            {/* <a href="#!" onClick={previousPage}><i className="material-icons">visibility</i></a> */}

            {/* <li className="waves-effect"><a href="#!" onClick={previousPage} style={{ display: 'inline', marginRight: '15px' }}><i><ArrowBackIcon fontSize='medium' /></i></a></li> */}
            <button className='btn-pag btn waves-effect waves-teal' onClick={previousPage} style={{ display: 'inline', marginRight: '20px' }}><ArrowBackIcon fontSize='medium' /></button>
            <p style={{ display: 'inline' }}>{currentPage} de {maxPages}</p>
            <button className='btn-pag btn waves-effect waves-teal' onClick={nextPage} style={{ display: 'inline', marginLeft: '20px' }}><ArrowForwardIcon fontSize='medium' /></button>
            {/* <button class=" btn waves-effect waves-light " type="submit" name="action">
                <i class="material-icons "><ArrowForwardIcon fontSize='medium' /></i>
            </button> */}
            
            {/* <li className="waves-effect"><a href="#!" onClick={nexPage} style={{ display: 'inline', marginLeft: '15px' }}><i><ArrowForwardIcon fontSize='medium' /></i></a></li> */}

        </div>

        // <ul className="pagination" style={{ marginTop: '50px', paddingBottom: '50px' }}>
        //     <li className="waves-effect disabled"><a href="#!"><i><ArrowBackIcon fontSize='normal' /></i></a></li>
        //     <li className="active"><a href="#!">1</a></li>
        //     <li className="waves-effect"><a href="#!">2</a></li>
        //     <li className="waves-effect"><a href="#!">3</a></li>
        //     <li className="waves-effect"><a href="#!">4</a></li>
        //     <li className="waves-effect"><a href="#!">5</a></li>
        //     <li className="waves-effect"><a href="#!"><i><ArrowForwardIcon fontSize='normal' /></i></a></li>
        // </ul>
    )
}
