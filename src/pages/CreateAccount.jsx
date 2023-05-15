import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<input type="text" id="name" placeholder="Name" className="input input-name" />
						<label for="name" className="label">Direccion</label>
						<input type="text" id="direccion" placeholder="Calle Wallaby 42" className="input input-direction"/>
						<label for="name" className="label">Telefono</label>
						<input type="#" placeholder="312598255" className="input input-direction"/>
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="sebas@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;