import { UnauthneticatedError, UnauthorizedError, BadRequestError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

    export const authenticateUser = async (req, res, next) => {
          const { token } = req.cookies;
          if(!token) throw  new UnauthneticatedError('authentication invalid');
    
try{
    const {userId, role} = verifyJWT(token); 
    const testUser = userId === '672f9b4f7beff96868650619';
    req.user = {userId, role, testUser};
    next();
}
catch(error) {
    throw new UnauthneticatedError('authentication invalid');
 }
};  

export const authorizePermissions = (...roles) => {
    return(req, res, next) => {

        if(!roles.includes(req.user.role)){
            throw new UnauthorizedError('Unauthorized to access this route')
        }
        
        next();
    }
}

export const checkForTestUser = (req, res, next) => {
    if(req.user.testUser) throw new BadRequestError('Demo User. Read Only!');
    next();
}