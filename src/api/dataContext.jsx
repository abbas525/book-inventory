import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();


export const DataProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    //Fetch Data

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/books');
            const data = await res.json()

            setBooks(data);

        }
        fetchData();

    }, []);


    // Adding Book
    const handleAddBook = async (e, book) => {
        e.preventDefault()
        console.log('Book:', book);

        try {
            const res = await fetch('http://localhost:3000/books', {
                method: 'POST',
                body: JSON.stringify(book)
            });

            if (res.ok) {
                alert('Book Added Successfully')
            } else {
                alert("Error adding book")
            }

        } catch (error) {
            console.log('Add error' + error)
        }

    }


    //Delete A Book

    const deleteBook = async (id) => { 
        try {
            const res = await fetch(`http://localhost:3000/books/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setBooks(prev=> prev.filter((book) => book.id !== id))
                alert('Book Deleted Successfully')
                
            } else {
                alert("Error Deleting book")
            }
        } catch (error) {
            console.log('Add error' + error)
        }
    }



    return (
        <DataContext.Provider value={{ books, handleAddBook, deleteBook }}>
            {children}
        </DataContext.Provider>
    )
}


export const useDataContext = () => {
    return useContext(DataContext);
};