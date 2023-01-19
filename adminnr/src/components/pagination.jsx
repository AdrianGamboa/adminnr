import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Pagination = ({ currentPage, setCurrentPage, maxPages }) => {

    const nexPage = () => {
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
            <li className="waves-effect"><a href="#!" onClick={previousPage} style={{ display: 'inline', marginRight: '15px' }}><i><ArrowBackIcon fontSize='medium' /></i></a></li>
            <p style={{ display: 'inline' }}>{currentPage} de {maxPages}</p>
            <li className="waves-effect"><a href="#!" onClick={nexPage} style={{ display: 'inline', marginLeft: '15px' }}><i><ArrowForwardIcon fontSize='medium' /></i></a></li>
            {/* <button onClick={nexPage} style={{ display: 'inline', marginLeft: '15px' }}><ArrowForwardIcon fontSize='normal' /></button> */}
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
