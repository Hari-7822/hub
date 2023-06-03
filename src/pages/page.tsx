import prisma from "../../prisma/prisma";

// const prisma = new PrismaClient();

export async function st() {
  const pr = await prisma.client.findFirst()

  return{
    props : {pr}
  }

}


export default ({pr}) => {
  <>
{/*   
  <ul>
    {pr.map(m => (
      <li key={m.id}>{m.name}</li>
    ))}
  </ul> */}
  
  <p>{pr}</p>

  </>
}