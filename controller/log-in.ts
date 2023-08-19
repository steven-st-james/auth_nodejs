import { Request, Response } from 'express';
import {PrismaClient} from '@prisma/client';
import bcrypt from "bcrypt";
import { successResponse } from '../helpers/index';
import { body, validationResult } from 'express-validator';


const prisma = new PrismaClient();


export const logIn = async(req: Request, res: Response): Promise<any> => {
    const { email, password} = req.body;

    try {

        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
         select: {
             firstName: true,
             lastName: true,
             logins: true,
             password: true,
             id: true
         }

        });

        if (user?.password) {
            if (bcrypt.compareSync(password, user?.password)) {
                await prisma.logins.create({
                    data: {
                        userId: user.id,
                    }
                })
        }

        const loggedInUser = user as Partial<any>;
        delete loggedInUser.password;
        return successResponse(req, res ,{loggedInUser});

        } else {

            res.status(404).json({message: 'Please type in the correct password'})
        }
        
    } catch(error) {
    
        res.status(404).json({error})
    }
}
