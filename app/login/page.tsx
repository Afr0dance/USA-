'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const delegation = 'usa'
  const correctPassword = 'Minerals4200'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (password === correctPassword) {
      const token = `${delegation}:${Date.now()}`
      document.cookie = `auth_token=${token}; path=/; max-age=86400`
      router.push(`/${delegation}`)
    } else {
      setError('Access Denied. Incorrect credentials.')
      setPassword('')
    }
    setIsLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f6fa',
      fontFamily: "'Source Code Pro', monospace",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#fff',
        border: '2px solid #BF0A30',
        padding: '40px 32px',
      }}>
        <div style={{
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#BF0A30',
          marginBottom: '8px',
          fontWeight: 600,
        }}>
          CONFIDENTIAL · EYES ONLY
        </div>

        <h1 style={{
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0.01em',
          color: '#002868',
          marginBottom: '8px',
          marginTop: '20px',
        }}>
          United States of America
        </h1>

        <p style={{
          fontSize: '12px',
          color: '#6b7a99',
          marginBottom: '30px',
          lineHeight: 1.6,
        }}>
          FENNLAND FORUM · EMERGENCY SPECIAL SESSION
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6b7a99',
              marginBottom: '8px',
              fontWeight: 600,
            }}>
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                border: `1px solid ${error ? '#BF0A30' : '#c8d0ea'}`,
                background: error ? 'rgba(191, 10, 48, 0.05)' : '#f4f6fa',
                color: '#002868',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
              placeholder="Enter access code"
              autoFocus
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(191, 10, 48, 0.1)',
              border: '1px solid #BF0A30',
              color: '#BF0A30',
              padding: '12px 14px',
              fontSize: '12px',
              marginBottom: '20px',
              lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: isLoading ? '#c8d0ea' : '#BF0A30',
              color: '#fff',
              border: 'none',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              opacity: isLoading ? 0.6 : 1,
            }}>
            {isLoading ? 'Verifying...' : 'Unlock Dossier'}
          </button>
        </form>

        <div style={{
          fontSize: '9px',
          color: '#6b7a99',
          marginTop: '20px',
          textAlign: 'center',
          letterSpacing: '0.08em',
        }}>
          FENNLAND FORUM · UNGA/SEP/FF/2024/001
        </div>
      </div>
    </div>
  )
}
