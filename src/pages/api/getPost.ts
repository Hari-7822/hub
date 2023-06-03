import prisma from .
// import prisma from '../../../prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'     




export default async function form(
  req: NextApiRequest,
  res: NextApiResponse
) 
{
  
  try{

    const data = await prisma.client.findFirst({
      where: {
        name: "zoro"
      }
    })
    return res.status(200). json(data)

  }catch(e) {
    return res.status(500).json(e)
  }

}


