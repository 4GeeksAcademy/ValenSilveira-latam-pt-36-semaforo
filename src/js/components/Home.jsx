import React, {useState} from "react";


//create your first component

const Home = () => {
	const [color, setColor] = useState("red");
	const [isVioletVisible, setIsVioletVisible] = useState(false);


	const toggleColor = () => {
		// para cambiar los colores con el boton
		if (color === "red") {
		  setColor("yellow");
		} else if (color === "yellow") {
		  setColor("green");
		} else  {
		  setColor("red");
		}
		setIsVioletVisible(false);
	  };

	  const activateViolet = () => {
		// Mostrar solo el color violeta
		setColor("violet");
		setIsVioletVisible(true);
	};


	return (
		<div className="traffic-light-container">
			<div className="poste"></div>
			<div className="traffic-light">
				<div 
					className={`light red ${color === "red" ? "selected" : ""}`}
					onClick={() => { setColor("red"); setIsVioletVisible(false); }}>
				</div>
				<div 
					className={`light yellow ${color === "yellow" ? "selected" : ""}`}
					onClick={() => { setColor("yellow"); setIsVioletVisible(false); }}>
				</div>
				<div 
					className={`light green ${color === "green" ? "selected" : ""}`}
					onClick={() => { setColor("green"); setIsVioletVisible(false); }}>
				</div>
				{isVioletVisible && (
					<div className={`light violet ${color === "violet" ? "selected" : ""}`}>
					</div>
				)}
			</div>
			<button onClick={toggleColor}>Alternar Color</button>
			<button onClick ={activateViolet}>Color Violeta</button>
		</div>
		
	)
	
};

export default Home;