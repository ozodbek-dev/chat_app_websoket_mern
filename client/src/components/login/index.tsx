import { FC } from "react";
import { LoginProps } from "./login.props";
import { Link } from "react-router-dom";

const Login: FC<LoginProps> = () => {
  return (
		<div className='login'>
      <div className='card'>
        
				<div className='card-header'>
					<h3>Login</h3>
				</div>
        <div className='card-body'>
          
					<form action=''>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' id='email' className='form-control' placeholder='Email' />
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Email</label>
							<input type='password' name='password' id='password' className='form-control' placeholder='Password' />
						</div>

						<div className='form-group'>
							<input type='submit' value='Login' className='form-control' />
            </div>
            
						<div className='form-group'>
							<span>
								<Link to='/messenger/register'> Register your account </Link>
							</span>
            </div>
            
					</form>
				</div>
			</div>
		</div>
	);
}
 
export default Login;