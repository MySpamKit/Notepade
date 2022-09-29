import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { LastPageRounded } from '@mui/icons-material';
// import Add from "./compound/add";

function NoteList() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const notelistdata=JSON.parse(localStorage.getItem("notelist"))||[];
	console.log(notelistdata,'$$$$$');
	const [task1, setTask1] = useState(notelistdata?.length>0?notelistdata:[]);
    console.log(notelistdata,'*****');
	

	// const [list] =useState([state])

	const deleteclick = (index) => {
		task1.splice(index, 1);
		setTask1([...task1]);

		alert('delete');
	};

	const View = (item) => {
		navigate('/note/viewmode', { state: item });
	};
	const handleEdit = (item) => {
		// setName(allData[i])
		// setEditIndex(i)
		navigate('/note/editmode', { state: item });
	};

	return (
		<div>
			<div className="plus">
				<AddCircleIcon
					onClick={() => {
						navigate('/note/addmode');
					}}
				></AddCircleIcon>
				<span style={{ color: '#918f8d', display: 'block' }}>Add Your Note</span>
			</div>
{console.log(task1)}
			{task1?.length > 0 ?
				task1.map((item, index) => {
					return (
						<div className="listed">
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 50 }} aria-label="simple table">
									<TableHead>
										<TableRow style={{ backgroundColor: '#cbade6' }}>
											<TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
												Title
											</TableCell>
											<TableCell style={{ color: '#000', fontWeight: 'bold' }}>Delete</TableCell>
											<TableCell style={{ color: '#000', fontWeight: 'bold' }}>Edit</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow
											key={item.title}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell onClick={() => View(item)} component="th" scope="row">
												{item.title}
											</TableCell>

											<TableCell component="th" scope="row">
												<Button
													className="delete"
													variant="outlined"
													onClick={() => deleteclick(index)}
													startIcon={<DeleteIcon />}
												>
													Delete
												</Button>
											</TableCell>

											<TableCell component="th" scope="row">
												<Button
													className="edit"
													variant="outlined"
													startIcon={<ModeEdit />}
													onClick={() => handleEdit(item)}
												>
													Edit
												</Button>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					);
				}):<p>No Data, Click + Button to add data</p>}
		</div>
	);
}

export default NoteList;
