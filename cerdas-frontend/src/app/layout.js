import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '[CeRDaS Application] Sentiment Analysis Model using FastAPI and Docker',
  description: 'This is a task assignment for Full Stack Developer at CeRDaS. The purpose of this task is to deploy Machine Learning (ML) model with FastAPI and Docker. For this task, sentiment analysis has been selected as the main use case.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
