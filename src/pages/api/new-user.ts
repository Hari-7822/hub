import pr from '../../../prisma/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) 
{

  const usr = await pr.user.findMany();

  res.status(200).json({ usr })
}



