import { useState, useEffect, useRef } from "react"
import T from 'prop-types'
import Pagination from "./Pagination";

export default function PasswordHistory({ passwordArrayLocal }) {
	const [pa, setPa] = useState(JSON.parse(localStorage.getItem('passwordArray')) || []);
	const [page, setPage] = useState(null);
	
	const itemsPerPage = 8;
	const lastPasswordIndex = page * itemsPerPage;
	const firstPasswordIndex = lastPasswordIndex - itemsPerPage;
	const pagePasswords = pa.slice(firstPasswordIndex, lastPasswordIndex);
	const prevPageRef = useRef(page);

	useEffect(() => {

			prevPageRef.current = page;
			if (page === null) {
				setPage(1);
			}

	}, [setPage, page]);

	passwordArrayLocal.current = setPa;

	const elements = (pagePasswords || []).map((password, index) => {
		if (index === 0 && page != null && page === prevPageRef.current) {
			return (
				<li key = {password} className='historyPassword' id="firstElement">
						{password}
				</li>
			)
		} else {
			return (
				<li key = {index} className='historyPassword'>
						{password}
				</li>
			)
		}
	})
  
  return (
		<>
			<h1>Password History</h1>
			<ul id="passwords-list">
				{elements}
			</ul>
			<Pagination itemsPerPage={itemsPerPage} pa={pa} page={page} setPage={setPage}/>
		</>
    )
}

PasswordHistory.propTypes = {
	passwordArrayLocal: T.shape({current: T.func})
}