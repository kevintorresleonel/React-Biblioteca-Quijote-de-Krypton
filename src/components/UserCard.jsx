import React from 'react'

export default function UserCard({ user }){
  return (
    <div className="card" style={{display:'flex',gap:12,alignItems:'center',padding:12}}>
      <img src={user.avatar || '/assets/img/user-placeholder.png'} alt={user.name} style={{width:56,height:56, borderRadius:8}} onError={(e)=>e.target.style.display='none'} />
      <div style={{flex:1}}>
        <strong>{user.name}</strong>
        <div className="muted small">{user.email}</div>
      </div>
      <div className="muted small">{user.status || 'Activo'}</div>
    </div>
  )
}
