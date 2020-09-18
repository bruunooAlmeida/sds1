import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from  'axios'
import { formatDate } from './helpers';
import Pagination from './Pagination';
import * as types from './types';
import Filters from '../../components/Filters'; 

const BASE_URL = 'http://localhost:8080'


const Records = () => {  
    const [ RecordsResponse, setRecordResponse] = useState<types.RecordsResponse>(); 
    const [ activePage, setActivePage ] = useState(0);
    
    const handlePageChance = (index: number) => {
        setActivePage(index);
    }

    useEffect(() => {
    axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
         .then(response => setRecordResponse(response.data));
        
    },[activePage])
    return (
        <div className="page-container">
        <Filters link="/Charts"  linkText="Ver Grafico"></Filters>
        <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                <th>INSTANTE</th>
                <th>NOME</th>
                <th>IDADE</th>
                <th>PLATAFORMA</th> 
                <th>GENERO</th>
                <th>TITULO DO GAME</th>
                </tr>
            </thead>
            <tbody>
                {RecordsResponse?.content.map(record => (
                    <tr key={record.id}>
                    <td>{formatDate(record.moment)}</td>
                    <td>{record.name}</td>
                    <td>{record.age}</td>
                    <td className="text-secondary">{record.gamePlatform}</td>
                    <td>{record.genreName}</td>
                    <td className="text-primary">{record.gameTitle}</td>
                    </tr>
                ))}            
            </tbody>
        </table>
        <Pagination 
            activePage={ activePage}
            goToPage= {handlePageChance}
            totalPages={ RecordsResponse?.totalPages}        
        />
    </div>
    )
}

export default Records;