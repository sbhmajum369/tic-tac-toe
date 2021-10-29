import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// onClick={() => this.setState({value: 'X'})}
// squares[props.value]
// setPlayerName(playerName => [...playerName,"X"]);


// const indexOfX = copyPlayerName.reduce((a,e,i) => {
// 	if (e === "X")
// 		a.push(i);
// 	return a;
// }, []);

const Board = () => {
	const [playerName, setPlayerName] = useState(Array(9).fill("_"));
	const [buttonDisable, setButtonDisable] = useState(Array(9).fill(false));;
	const [playerToggle, setPlayerToggle] = useState(false);
	const [player, setPlayer] = useState("O");
	const [winner, setWinner] = useState("");

	const horizontalMatches = [[0,1,2], [3,4,5], [6,7,8]];
	const verticalMatches = [[0,3,6], [1,4,7], [2,5,8]];
	const diagMatches = [[0,4,8], [2,4,6]];

	const Square = (props) => {
		return (
				<Button className="button" variant="outlined" style={{color: '#FFFFFF', borderColor: '#FD8C12'}} onClick={props.onClick} disabled={props.disabled}>
					{props.value}
				</Button>
			);
	};

	const playerOnMove = (value) => {
		setPlayerToggle(!playerToggle);

		let copyPlayerName = [...playerName];
		let copyButtonDisable = [...buttonDisable];

		if (playerToggle) {
			copyPlayerName[value] = "X";
			setPlayerName(copyPlayerName);
			// console.log(copyPlayerName);
			setPlayer("O");
		}
		if (!playerToggle) {
			copyPlayerName[value] = "O";
			setPlayerName(copyPlayerName);
			// console.log(copyPlayerName);
			setPlayer("X");
			
		}

		copyButtonDisable[value] = true;
		setButtonDisable(copyButtonDisable);

		// Calculating who won
		var indexOfX = copyPlayerName.map((e, i) => e === "X" ? i : '').filter(String);
		var indexOfO = copyPlayerName.map((e, i) => e === "O" ? i : '').filter(String);
		// console.log(indexOfX, indexOfO);
		
		horizontalMatches.forEach((arr) => {
			if (arr.every(e => indexOfX.includes(e))) {		// Matching 2 arrays
				console.log("X Won", arr);
				setWinner("X");
				setPlayer(null);
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		verticalMatches.forEach((arr) => {
			if (arr.every(e => indexOfX.includes(e))) {
				console.log("X Won", arr);
				setPlayer(null);
				setWinner("X");
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		diagMatches.forEach((arr) => {
			if (arr.every(e => indexOfX.includes(e))) {
				console.log("X Won", arr);
				setPlayer(null);
				setWinner("X");
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		horizontalMatches.forEach((arr) => {
			if (arr.every(e => indexOfO.includes(e))) {
				console.log("O Won", arr);
				setPlayer(null);
				setWinner("O");
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		verticalMatches.forEach((arr) => {
			if (arr.every(e => indexOfO.includes(e))) {
				console.log("O Won", arr);
				setPlayer(null);
				setWinner("O");
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		diagMatches.forEach((arr) => {
			if (arr.every(e => indexOfO.includes(e))) {
				console.log("O Won", arr);
				setPlayer(null);
				setWinner("O");
				copyButtonDisable.fill(true, 0, 9);
				setButtonDisable(copyButtonDisable);
				return
			}
		});

		if (copyButtonDisable.every(elem => elem === true)) {		// Logic to display DRAW 
			setPlayer(null);
		}

	};


	return (
		<div className="board">
			<div className="headline">
				{player!=null 
					? <h3> Player {player}'s turn </h3>
					: [(winner !== "" 
						? <h2 key='0'> Winner: {winner} </h2>
						: <h2 key='1'> Draw </h2>
						)]
				}
			</div>
			<div className="arena">
				<Box sx={{flexGrow: 1}}>
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<Square value={playerName[0]} disabled={buttonDisable[0]} onClick={()=>playerOnMove(0)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[1]} disabled={buttonDisable[1]} onClick={()=>playerOnMove(1)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[2]} disabled={buttonDisable[2]} onClick={()=>playerOnMove(2)} />
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<Square value={playerName[3]} disabled={buttonDisable[3]} onClick={()=>playerOnMove(3)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[4]} disabled={buttonDisable[4]} onClick={()=>playerOnMove(4)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[5]} disabled={buttonDisable[5]} onClick={()=>playerOnMove(5)} />
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<Square value={playerName[6]} disabled={buttonDisable[6]} onClick={()=>playerOnMove(6)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[7]} disabled={buttonDisable[7]} onClick={()=>playerOnMove(7)} />
						</Grid>
						<Grid item xs={4}>
							<Square value={playerName[8]} disabled={buttonDisable[8]} onClick={()=>playerOnMove(8)} />
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
		);
}

export default Board;
