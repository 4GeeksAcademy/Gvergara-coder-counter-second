import React from "react";

const Home = ({ seconds }) => {
	/*if (seconds < 10){
		return seconds -1;
	}*/
	let unidades = Math.floor(seconds/1)%10;
	let decenas = Math.floor(seconds/10)%10; 
	let centenas = Math.floor(seconds / 100)%10;
	let mil = Math.floor(seconds /1000)%10;
	let millon = Math.floor(seconds/ 10000)%10;
	let billon = Math.floor(seconds/ 100000)%10;
	
	return (
		<div>

			<counter />
			<div className="text-center row bg-dark" id="container">
				<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" id="card">

					<div>
						<i class="fa-solid fa-clock" id="card"></i>
						{billon}
						{millon}
						{mil}
						{centenas}
						{decenas}
						{unidades}
					</div>

				</div>
			</div>
		</div>

	);
};


export default Home;