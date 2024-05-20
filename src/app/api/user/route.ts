import { NextResponse } from 'next/server';
import { prisma } from '../lib/prisma';

export async function GET() {
  const user = await prisma.user.findMany();

  if (!user)
    return NextResponse.json(
      {
        errMsg: 'User not found',
      },
      { status: 400 },
    );

  return NextResponse.json(user);
}
