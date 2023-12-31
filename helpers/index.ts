import { Request, Response} from 'express';

export const uniqueId = (length = 13) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  export const successResponse = (req: Request, res: Response, data: any, code = 200) => res.send({
    code,
    data,
    success: true,
  });

  export const errorResponse = (
    req: Request,
    res: Response,
    errorMessage = 'Something went wrong',
    code = 500,
    error = {},
  ) => res.status(500).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
  });