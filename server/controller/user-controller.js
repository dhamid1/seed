
import bcrypt from 'bcrypt';
import user from '../model/user.js';


export const signupUser = async (request, response) => {
    try {

        //const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(request.body.password, 20);
        //12345
        //dfvdfvqre893489heifh938heuwjdfavvfdsvdfavdfveqrfqerf3434r3q4d334ffefdf34
        const User = {username: request.body.username, name: request.body.name, password: hashedPassword};

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'signup successful'});
    } catch (error){
        return response.status(500).json({ msg: 'Error while signup the user'});
    }
}