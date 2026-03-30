'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: unknown, formData: FormData) {
  const password = formData.get('password') as string
  
  // You should set ADMIN_PASSWORD in your .env file
  // Default fallback is 'agora-admin' if not set (for development)
  const CORRECT_PASSWORD = process.env.ADMIN_PASSWORD || 'agora-admin'

  if (password === CORRECT_PASSWORD) {
    // Set cookie
    (await cookies()).set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })
    redirect('/admin')
  } else {
    return {
      success: false,
      message: 'Incorrect password'
    }
  }
}

export async function logout() {
  (await cookies()).delete('admin_session')
  redirect('/admin/login')
}
