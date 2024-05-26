import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TabContent = ({ activeTab }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
                setData(response.data);
                setLoading(false);
                setCurrentPage(1);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [activeTab]);

    const filteredData = data.filter(item => {
        if (activeTab === 'resources') {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
            return item.tag === activeTab && item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="mt-3">
                <div className="input-group mb-3">
                    <button className="btn search-btn" type="button" disabled>
                        <i className="bi bi-search"></i>
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {currentItems.map(item => (
                        <div key={item.id} className="col">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-start mb-3">
                                        <img className="card-img-top me-3" src={item.icon_url} alt={item.title} />
                                        <div>
                                            <h2 className="card-title">{item.title}</h2>
                                            <h5 className="card-title-1 d-flex align-items-start">{item.category}</h5>
                                        </div>
                                    </div>
                                    <div className="card-link-div">
                                        <a className="card-link" href={item.link}>{item.link}</a>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-primary">Previous</button>
                    <span className="mx-2">Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-primary">Next</button>
                </div>
            </div>
        </>
    );
};

export default TabContent;