import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [vipAdminToken, setVipAdminToken] = useState('')
  const [error, setError] = useState('')
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('accounts')
  const [message, setMessage] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', email, password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); setLoading(false); return }
      setToken(data.token)
      setVipAdminToken(data.vipAdminToken || 'lionelite-admin-secret')
      setLoggedIn(true)
      fetchAccounts(data.vipAdminToken || 'lionelite-admin-secret')
    } catch { setError('Connection error'); setLoading(false) }
  }

  async function fetchAccounts(adminToken) {
    const t = adminToken || vipAdminToken
    setLoading(true)
    try {
      const res = await fetch('/api/vip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list-all', token: t }),
      })
      const data = await res.json()
      if (data.accounts) setAccounts(data.accounts)
    } catch {}
    setLoading(false)
  }

  async function togglePaid(vipId, email, currentlyPaid) {
    setMessage('')
    try {
      const res = await fetch('/api/vip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update-status', token: vipAdminToken, email, vipId, paid: !currentlyPaid }),
      })
      if (res.ok) {
        setAccounts(prev => prev.map(a => a.vipId === vipId ? { ...a, paid: !currentlyPaid } : a))
        setMessage(`Payment status updated for ${email}`)
      }
    } catch {}
  }

  async function handleLogout() {
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout', token }),
    }).catch(() => {})
    setLoggedIn(false)
    setToken('')
    setAccounts([])
  }

  if (!loggedIn) {
    return (
      <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
        <SEO title="Admin Login — Lion Elite" />
        <Navbar />
        <div style={{ paddingTop: '140px' }} className="max-w-md mx-auto px-6">
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0D5C5', padding: '48px 40px' }}>
            <p style={{ color: '#C9A96E', fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.35em', fontSize: '10px', marginBottom: '16px', textAlign: 'center' }} className="uppercase">Admin Portal</p>
            <h1 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '1.8rem', textAlign: 'center', marginBottom: '8px' }} className="font-normal">Sign In</h1>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#C9A96E', margin: '0 auto 32px' }}></div>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }} className="uppercase">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #E0D5C5', backgroundColor: '#FAF7F2', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '14px', color: '#2A2A2A', outline: 'none', boxSizing: 'border-box' }}
                  required />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }} className="uppercase">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #E0D5C5', backgroundColor: '#FAF7F2', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '14px', color: '#2A2A2A', outline: 'none', boxSizing: 'border-box' }}
                  required />
              </div>
              {error && <p style={{ color: '#C0392B', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '12px', marginBottom: '16px', textAlign: 'center' }}>{error}</p>}
              <button type="submit" disabled={loading}
                style={{ width: '100%', backgroundColor: '#C9A96E', color: '#000', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.2em', padding: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }} className="uppercase">
                {loading ? 'Signing in...' : 'Sign In →'}
              </button>
            </form>
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#BABABA', fontSize: '11px' }}>
            <Link to="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>← Back to site</Link>
          </p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      <SEO title="Admin Dashboard — Lion Elite" />
      <Navbar />

      <div style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
            <div className="flex items-center gap-4">
              <Link to="/" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '12px', letterSpacing: '0.15em', textDecoration: 'none' }} className="uppercase hover:text-[#C9A96E] transition-colors">
                ← Site
              </Link>
              <p style={{ color: '#BABABA', fontSize: '12px' }}>/</p>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '12px', letterSpacing: '0.15em' }} className="uppercase">Admin Dashboard</p>
            </div>
            <button onClick={handleLogout}
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '11px', letterSpacing: '0.15em', background: 'none', border: '1px solid #E0D5C5', padding: '10px 20px', cursor: 'pointer' }} className="uppercase hover:text-[#C0392B] transition-colors">
              Sign Out
            </button>
          </div>

          <h1 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '2rem', marginBottom: '24px' }} className="font-normal">
            Client Accounts
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '32px' }}></div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { label: 'Total Clients', value: accounts.length, accent: '#2A2A2A' },
              { label: 'Paid', value: accounts.filter(a => a.paid).length, accent: '#5BA87A' },
              { label: 'Pending Payment', value: accounts.filter(a => !a.paid).length, accent: '#C9A96E' },
              { label: 'Foundation', value: accounts.filter(a => a.tier === 'foundation').length, accent: '#8A9E85' },
              { label: 'VIP', value: accounts.filter(a => a.tier === 'vip').length, accent: '#7A9FBF' },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0D5C5', padding: '20px 28px', minWidth: '130px', flex: 1 }}>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: s.accent, fontSize: '24px', margin: '0 0 4px' }}>{s.value}</p>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '10px', letterSpacing: '0.15em', margin: 0 }} className="uppercase">{s.label}</p>
              </div>
            ))}
          </div>

          {message && (
            <div style={{ backgroundColor: '#E8F5E9', border: '1px solid #5BA87A', padding: '12px 20px', marginBottom: '20px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#2A2A2A', fontSize: '13px' }}>
              {message}
            </div>
          )}

          {/* Accounts table */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0D5C5', overflow: 'hidden' }}>
            <div className="overflow-x-auto">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E0D5C5', backgroundColor: '#FAF7F2' }}>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">VIP ID</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Name</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Email</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Program</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Tier</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Payment</th>
                    <th style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.15em', textAlign: 'left', fontWeight: 400 }} className="uppercase">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '40px', textAlign: 'center', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#BABABA', fontSize: '13px' }}>
                        {loading ? 'Loading accounts...' : 'No client accounts yet.'}
                      </td>
                    </tr>
                  ) : (
                    accounts.map((a, i) => (
                      <tr key={a.vipId} style={{ borderBottom: '1px solid #F0EAE0', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAF8F6' }}>
                        <td style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', fontSize: '11px', letterSpacing: '0.05em' }}>{a.vipId}</td>
                        <td style={{ padding: '14px 18px', fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '14px' }}>{a.name}</td>
                        <td style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '12px' }}>{a.email}</td>
                        <td style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '12px' }}>{a.program || '—'}</td>
                        <td style={{ padding: '14px 18px' }}>
                          <span style={{
                            fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '10px', letterSpacing: '0.1em', padding: '4px 10px',
                            backgroundColor: a.tier === 'vip' ? '#7A9FBF20' : a.tier === 'foundation' ? '#8A9E8520' : '#F0EAE0',
                            color: a.tier === 'vip' ? '#7A9FBF' : a.tier === 'foundation' ? '#8A9E85' : '#8A8A8A',
                          }} className="uppercase">{a.tier || '—'}</span>
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          <div className="flex items-center gap-2">
                            <span style={{
                              display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%',
                              backgroundColor: a.paid ? '#5BA87A' : '#C9A96E',
                            }}></span>
                            <span style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: a.paid ? '#5BA87A' : '#C9A96E', fontSize: '11px', letterSpacing: '0.05em' }}>
                              {a.paid ? 'Paid' : 'Pending'}
                            </span>
                            <button onClick={() => togglePaid(a.vipId, a.email, a.paid)}
                              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '10px', color: '#8A8A8A', background: 'none', border: '1px solid #E0D5C5', padding: '4px 10px', cursor: 'pointer', marginLeft: '4px' }}>
                              Toggle
                            </button>
                          </div>
                        </td>
                        <td style={{ padding: '14px 18px', fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '11px' }}>
                          {a.created ? new Date(a.created).toLocaleDateString() : '—'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '20px 24px', backgroundColor: '#F9F7F4', border: '1px solid #E0D5C5' }}>
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '10px', letterSpacing: '0.15em', marginBottom: '8px' }} className="uppercase">Quick Actions</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={fetchAccounts}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.1em', backgroundColor: '#C9A96E', color: '#000', border: 'none', padding: '12px 24px', cursor: 'pointer' }} className="uppercase">
                Refresh Accounts
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '80px' }}>
        <Footer />
      </div>
    </div>
  )
}