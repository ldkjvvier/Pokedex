export const NotFound = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div
				className="flex flex-col justify-center h-1/4 bg-background-image w-11/12 opacity-90 text-white text-center p-6"
				style={{
					backgroundColor: '#424242',
					borderRadius: '5px 30px 5px 30px',
				}}
			>
				<h4 className="font-bold text-2xl mb-6">404</h4>
				<p className="text-center">
					Lo siento, la página que buscas no existe o no se encuentra
					disponible
				</p>
			</div>
		</div>
	)
}
