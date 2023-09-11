import { FC } from "react";
import { RegisterProps } from "./register.props";
import { Link } from "react-router-dom";

const Register: FC<RegisterProps> = () => {
	return (
		<div className='register'>
			<div className='card'>
        <div className='card-header'>
          <h3>Register</h3>
        </div>
				<div className='card-body'>
          <form action=''>
            
						<div className='form-group'>
							<label htmlFor='username'>User name</label>
							<input type='text' className='form-control' placeholder='user name' id='username' />
            </div>
            
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input type='email' className='form-control' placeholder='email' id='email' />
						</div>

						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input type='password' className='form-control' placeholder='Password' id='password' />
						</div>

						<div className='form-group'>
							<label htmlFor='confirmPassword'>Confirm Password</label>
							<input type='password' className='form-control' placeholder='Confirm password' id='Confirm Password' />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input type="file" className="form-control" id="image" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Register" className="form-control" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/messenger/login">
                  Login Your Component
                </Link>
              </span>
            </div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
