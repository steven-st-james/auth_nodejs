import { Request, Response } from 'express';
import {PrismaClient} from '@prisma/client';
import bcrypt from "bcrypt";
const prisma = new PrismaClient();





export const signUp = async(req: Request, res: Response): Promise<any> => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    const {email, password, firstName, lastName} = req.body;
    const hash = bcrypt.hashSync(password, salt);
    try {
        await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            }
        });
        
        res.json({message: "New User Added"})
    } catch (error) {
        res.json({error});
    }
}